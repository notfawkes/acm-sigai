'use client';
import Link from "next/link";
/* eslint-disable no-unused-expressions */
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
// use your own icon import if react-icons is not available
import { GoArrowUpRight } from 'react-icons/go';
import './Header.css';
import Logo from './Logo';

const Header = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  // resolve bgImage to a usable URL (supports string, imported image object, data URIs)
  const resolveImageSrc = (img) => {
    if (!img) return '';
    let src = typeof img === 'string' ? img : img?.src ?? img?.default ?? '';
    if (!src) return '';
    // Add leading slash for local relative paths, ignore absolute/protocol and data URIs
    if (!/^([a-z][a-z0-9+.-]*:)?\/\//i.test(src) && !src.startsWith('/') && !src.startsWith('data:')) {
      src = `/${src}`;
    }
    return src;
  };

  // preload/resolution state for bg images to avoid 404s and provide a fallback
  const [resolvedBgUrls, setResolvedBgUrls] = useState({});

  useEffect(() => {
    if (!items || items.length === 0) {
      setResolvedBgUrls({});
      return;
    }

    let active = true;
    const FALLBACK_SVG = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect fill='%23ddd' width='100%' height='100%'/></svg>`;
    const FALLBACK_DATA_URI = `data:image/svg+xml;utf8,${encodeURIComponent(FALLBACK_SVG)}`;

    const tryImage = (url) =>
      new Promise((res) => {
        if (!url) return res(null);
        if (url.startsWith('data:')) {
          const img = new Image();
          img.onload = () => res(url);
          img.onerror = () => res(null);
          img.src = url;
          return;
        }
        const img = new Image();
        img.onload = () => res(url);
        img.onerror = () => res(null);
        img.src = url;
      });

    const candidatesFor = (raw) => {
      if (!raw) return [];
      const r = raw;
      const noLeading = r.startsWith('/') ? r.slice(1) : r;
      const list = [
        r,
        encodeURI(r),
        `/${noLeading}`,
        `/${encodeURI(noLeading)}`,
        `/assets/${noLeading}`,
        `/images/${noLeading}`,
        `/static/${noLeading}`,
      ];
      return Array.from(new Set(list)).filter(Boolean);
    };

    (async () => {
      const map = {};
      for (let i = 0; i < items.length; i += 1) {
        const item = items[i];
        const raw =
          typeof item?.bgImage === 'string'
            ? item.bgImage
            : item?.bgImage?.src ?? item?.bgImage?.default ?? '';

        const resolvedInitial = resolveImageSrc(item?.bgImage);
        const candidates = resolvedInitial ? [resolvedInitial, ...candidatesFor(raw)] : candidatesFor(raw);

        let found = null;
        for (const c of candidates) {
          // eslint-disable-next-line no-await-in-loop
          const ok = await tryImage(c);
          if (ok) {
            found = c;
            break;
          }
        }

        map[i] = found || FALLBACK_DATA_URI;
      }
      if (active) setResolvedBgUrls(map);
    })();

    return () => { active = false; };
  }, [items]);

  // debug: log resolved bgImage urls to help track 404s
  useLayoutEffect(() => {
    (items || []).forEach((item, idx) => {
      const src = resolvedBgUrls[idx] ?? resolveImageSrc(item?.bgImage);
      if (!src) console.warn('[Header] missing bgImage src for', item?.label);
      else console.debug('[Header] bgImage resolved for', item?.label, src);
    });
  }, [items, resolvedBgUrls]);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 75; /* Changed from 60 */
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 75, overflow: 'hidden' }); /* Changed from 60 */
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div className={`card-nav-container ${className}`}>
      <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: baseColor }}>
        <div className="card-nav-top">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <div className="logo-container">
            <Logo />
          </div>

          {/* <button
            type="button"
            className="card-nav-cta-button"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            Get Started
          </button> */}
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).slice(0, 5).map((item, idx) => (
<Link
  key={`${item.label}-${idx}`}
  href={item.href || "#"}
  className="nav-card nav-card-clickable"
  ref={setCardRef(idx)}
  style={{
    backgroundImage: (() => {
      const src = resolvedBgUrls[idx] ?? resolveImageSrc(item?.bgImage);
      return src ? `url("${src}")` : 'none';
    })(),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: item.textColor,
    textDecoration: 'none',
  }}
>
  <div className="nav-card-label">{item.label}</div>

  <div className="nav-card-links">
    {item.links?.map((lnk, i) => (
      <Link
        key={`${lnk.label}-${i}`}
        className="nav-card-link"
        href={lnk.href}
        aria-label={lnk.ariaLabel}
        onClick={(e) => e.stopPropagation()} // critical
      >
        <GoArrowUpRight className="nav-card-link-icon" />
        {lnk.label}
      </Link>
    ))}
  </div>
</Link>

          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;