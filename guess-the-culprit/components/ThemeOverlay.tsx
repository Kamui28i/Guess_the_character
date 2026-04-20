"use client";
import { BACKGROUNDS } from "@/lib/backgrounds";

interface Props { backgroundId: string }

export default function ThemeOverlay({ backgroundId }: Props) {
  const bg = BACKGROUNDS.find((b) => b.id === backgroundId);
  if (!bg) return null;

  const accent = bg.accentColor;
  const op = (a: number) => `${accent}${Math.round(a * 255).toString(16).padStart(2, "0")}`;

  const base = "fixed inset-0 pointer-events-none overflow-hidden";
  const z = "z-[1]";

  if (backgroundId === "detective") {
    return (
      <div className={`${base} ${z}`}>
        <svg className="absolute bottom-10 right-10 opacity-[0.04]" width="180" height="180" viewBox="0 0 180 180" fill="none">
          <circle cx="70" cy="70" r="55" stroke={accent} strokeWidth="8"/>
          <circle cx="70" cy="70" r="30" stroke={accent} strokeWidth="3"/>
          <line x1="112" y1="112" x2="168" y2="168" stroke={accent} strokeWidth="10" strokeLinecap="round"/>
        </svg>
        <svg className="absolute top-20 left-8 opacity-[0.03]" width="100" height="100" viewBox="0 0 100 100" fill="none">
          <circle cx="40" cy="40" r="32" stroke={accent} strokeWidth="5"/>
          <line x1="64" y1="64" x2="95" y2="95" stroke={accent} strokeWidth="7" strokeLinecap="round"/>
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[320px] font-black opacity-[0.015] select-none" style={{ color: accent, fontFamily: "serif" }}>?</div>
      </div>
    );
  }

  if (backgroundId === "soul-society") {
    return (
      <div className={`${base} ${z}`}>
        {/* Hollow mask fragments */}
        <svg className="absolute top-16 right-16 opacity-[0.06]" width="160" height="160" viewBox="0 0 160 160" fill="none">
          <ellipse cx="80" cy="70" rx="60" ry="65" stroke={accent} strokeWidth="3"/>
          <ellipse cx="55" cy="60" rx="14" ry="18" stroke={accent} strokeWidth="2"/>
          <ellipse cx="105" cy="60" rx="14" ry="18" stroke={accent} strokeWidth="2"/>
          <path d="M55 105 Q80 125 105 105" stroke={accent} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          <path d="M62 105 L62 118 M70 105 L70 120 M80 105 L80 122 M90 105 L90 120 M98 105 L98 118" stroke={accent} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        {/* Butterflies */}
        <svg className="absolute bottom-24 left-12 opacity-[0.05]" width="120" height="80" viewBox="0 0 120 80" fill="none">
          <path d="M60 40 C40 10 5 15 10 40 C5 65 40 70 60 40Z" stroke={accent} strokeWidth="2" fill={op(0.05)}/>
          <path d="M60 40 C80 10 115 15 110 40 C115 65 80 70 60 40Z" stroke={accent} strokeWidth="2" fill={op(0.05)}/>
          <line x1="60" y1="28" x2="60" y2="52" stroke={accent} strokeWidth="1.5"/>
        </svg>
        <svg className="absolute top-1/3 left-1/4 opacity-[0.04]" width="80" height="54" viewBox="0 0 80 54" fill="none">
          <path d="M40 27 C28 7 4 10 7 27 C4 44 28 47 40 27Z" stroke={accent} strokeWidth="1.5" fill={op(0.04)}/>
          <path d="M40 27 C52 7 76 10 73 27 C76 44 52 47 40 27Z" stroke={accent} strokeWidth="1.5" fill={op(0.04)}/>
        </svg>
      </div>
    );
  }

  if (backgroundId === "hidden-leaf") {
    return (
      <div className={`${base} ${z}`}>
        {/* Leaf village symbol */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]" width="280" height="280" viewBox="0 0 280 280" fill="none">
          <circle cx="140" cy="140" r="120" stroke={accent} strokeWidth="4"/>
          <path d="M140 40 C100 80 80 110 80 140 C80 180 108 205 140 215 C172 205 200 180 200 140 C200 110 180 80 140 40Z" stroke={accent} strokeWidth="3" fill={op(0.04)}/>
          <line x1="140" y1="215" x2="140" y2="250" stroke={accent} strokeWidth="3" strokeLinecap="round"/>
        </svg>
        {/* Floating kunai */}
        <svg className="absolute top-24 right-20 opacity-[0.05]" width="24" height="90" viewBox="0 0 24 90" fill="none">
          <polygon points="12,0 20,22 12,18 4,22" stroke={accent} strokeWidth="1.5" fill={op(0.1)}/>
          <rect x="10" y="22" width="4" height="45" stroke={accent} strokeWidth="1.5" fill={op(0.05)}/>
          <path d="M6 67 Q12 80 18 67 Q12 90 6 67Z" stroke={accent} strokeWidth="1" fill={op(0.08)}/>
        </svg>
        <svg className="absolute bottom-32 left-20 opacity-[0.04]" width="18" height="68" viewBox="0 0 18 68" transform="rotate(30)" style={{transform:"rotate(30deg)"}}>
          <polygon points="9,0 16,17 9,14 2,17" stroke={accent} strokeWidth="1.5" fill={op(0.1)}/>
          <rect x="7.5" y="17" width="3" height="34" stroke={accent} strokeWidth="1" fill={op(0.05)}/>
        </svg>
      </div>
    );
  }

  if (backgroundId === "kira") {
    return (
      <div className={`${base} ${z}`}>
        {/* Death Note notebook */}
        <svg className="absolute bottom-16 right-16 opacity-[0.06]" width="140" height="180" viewBox="0 0 140 180" fill="none">
          <rect x="5" y="5" width="130" height="170" rx="4" stroke={accent} strokeWidth="3" fill={op(0.04)}/>
          <rect x="5" y="5" width="18" height="170" rx="4" fill={op(0.08)}/>
          {[40,60,80,100,120,140].map((y) => (
            <line key={y} x1="32" y1={y} x2="125" y2={y} stroke={accent} strokeWidth="0.8" opacity="0.4"/>
          ))}
          <text x="70" y="28" textAnchor="middle" fill={accent} fontSize="11" fontFamily="serif" opacity="0.7">DEATH NOTE</text>
        </svg>
        {/* Falling feathers */}
        {[
          { x: 60, y: 80, rot: -20, scale: 1 },
          { x: 200, y: 200, rot: 15, scale: 0.7 },
          { x: 320, y: 120, rot: -35, scale: 0.85 },
        ].map((f, i) => (
          <svg key={i} className="absolute opacity-[0.05]" style={{ left: f.x, top: f.y, transform: `rotate(${f.rot}deg) scale(${f.scale})` }} width="24" height="70" viewBox="0 0 24 70" fill="none">
            <path d="M12 0 C20 15 22 35 12 70 C2 35 4 15 12 0Z" stroke={accent} strokeWidth="1.5" fill={op(0.1)}/>
            <line x1="12" y1="0" x2="12" y2="70" stroke={accent} strokeWidth="1" opacity="0.5"/>
          </svg>
        ))}
      </div>
    );
  }

  if (backgroundId === "cursed-domain") {
    return (
      <div className={`${base} ${z}`}>
        {/* Sukuna-style eyes */}
        {[
          { x: "10%", y: "15%", size: 50 },
          { x: "75%", y: "70%", size: 70 },
          { x: "55%", y: "10%", size: 35 },
        ].map((e, i) => (
          <svg key={i} className="absolute opacity-[0.06]" style={{ left: e.x, top: e.y }} width={e.size * 2.5} height={e.size} viewBox="0 0 100 40" fill="none">
            <path d="M5 20 Q50 -10 95 20 Q50 50 5 20Z" stroke={accent} strokeWidth="2" fill={op(0.06)}/>
            <circle cx="50" cy="20" r="12" stroke={accent} strokeWidth="2"/>
            <circle cx="50" cy="20" r="5" fill={accent} opacity="0.3"/>
          </svg>
        ))}
        {/* Cursed energy lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice" fill="none">
          <path d="M0 200 C100 150 150 250 200 200 C250 150 300 250 400 200" stroke={accent} strokeWidth="2"/>
          <path d="M0 400 C80 350 180 450 250 380 C320 310 380 420 400 380" stroke={accent} strokeWidth="1.5"/>
          <path d="M0 600 C120 560 200 640 300 590 C360 560 400 600 400 600" stroke={accent} strokeWidth="1"/>
        </svg>
      </div>
    );
  }

  if (backgroundId === "saiyan-power") {
    return (
      <div className={`${base} ${z}`}>
        {/* Dragon balls */}
        {[
          { x: "8%", y: "20%", stars: 1, size: 40 },
          { x: "80%", y: "15%", stars: 4, size: 55 },
          { x: "70%", y: "65%", stars: 7, size: 48 },
        ].map((db, i) => (
          <svg key={i} className="absolute opacity-[0.08]" style={{ left: db.x, top: db.y }} width={db.size} height={db.size} viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="27" stroke={accent} strokeWidth="2" fill={op(0.08)}/>
            <ellipse cx="30" cy="30" rx="27" ry="10" stroke={accent} strokeWidth="1" opacity="0.3"/>
            {Array.from({ length: db.stars }).map((_, s) => {
              const angle = (s / db.stars) * Math.PI * 2;
              const r = s === 0 ? 0 : 8;
              const cx = 30 + Math.cos(angle) * r;
              const cy = 30 + Math.sin(angle) * r;
              return <circle key={s} cx={cx} cy={cy} r="3" fill={accent} opacity="0.6"/>;
            })}
          </svg>
        ))}
        {/* Ki aura lines */}
        <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-[0.05]" width="300" height="400" viewBox="0 0 300 400" fill="none">
          {[-60,-40,-20,0,20,40,60].map((x, i) => (
            <line key={i} x1={150 + x} y1="400" x2={150 + x * 0.3} y2="0" stroke={accent} strokeWidth="1.5"/>
          ))}
        </svg>
      </div>
    );
  }

  if (backgroundId === "ghoul-ward") {
    return (
      <div className={`${base} ${z}`}>
        {/* Kagune tentacles in corners */}
        <svg className="absolute bottom-0 right-0 opacity-[0.07]" width="250" height="300" viewBox="0 0 250 300" fill="none">
          <path d="M250 300 C200 220 230 160 180 100 C150 60 120 80 100 40" stroke={accent} strokeWidth="4" strokeLinecap="round" fill="none"/>
          <path d="M250 300 C210 250 250 180 210 120 C180 70 150 90 140 50" stroke={accent} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <path d="M250 300 C220 270 240 200 200 150 C170 110 140 120 130 80" stroke={accent} strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
        {/* Ghoul eye */}
        <svg className="absolute top-20 left-12 opacity-[0.06]" width="100" height="50" viewBox="0 0 100 50" fill="none">
          <path d="M5 25 Q50 -5 95 25 Q50 55 5 25Z" stroke={accent} strokeWidth="2" fill={op(0.06)}/>
          <circle cx="50" cy="25" r="14" stroke={accent} strokeWidth="2"/>
          <circle cx="50" cy="25" r="6" fill={accent} opacity="0.25"/>
          <circle cx="44" cy="21" r="2" fill="white" opacity="0.15"/>
        </svg>
      </div>
    );
  }

  if (backgroundId === "survey-corps") {
    return (
      <div className={`${base} ${z}`}>
        {/* Wings of Freedom */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]" width="320" height="200" viewBox="0 0 320 200" fill="none">
          {/* Left wing */}
          <path d="M160 100 C140 80 100 60 60 70 C30 78 10 95 20 110 C35 130 80 120 110 105 C130 96 145 90 160 100Z" stroke={accent} strokeWidth="2" fill={op(0.06)}/>
          <path d="M160 100 C145 70 115 45 75 50 C45 54 20 70 30 88 C42 108 85 100 115 88 C138 79 150 85 160 100Z" stroke={accent} strokeWidth="1.5" fill={op(0.04)}/>
          {/* Right wing (mirror) */}
          <path d="M160 100 C180 80 220 60 260 70 C290 78 310 95 300 110 C285 130 240 120 210 105 C190 96 175 90 160 100Z" stroke={accent} strokeWidth="2" fill={op(0.06)}/>
          <path d="M160 100 C175 70 205 45 245 50 C275 54 300 70 290 88 C278 108 235 100 205 88 C182 79 170 85 160 100Z" stroke={accent} strokeWidth="1.5" fill={op(0.04)}/>
          {/* Center body */}
          <ellipse cx="160" cy="100" rx="12" ry="18" stroke={accent} strokeWidth="2" fill={op(0.08)}/>
        </svg>
      </div>
    );
  }

  if (backgroundId === "ua-grounds") {
    return (
      <div className={`${base} ${z}`}>
        {/* Lightning bolts */}
        {[
          { x: "5%",  y: "10%", rot: 10,  size: 60 },
          { x: "80%", y: "60%", rot: -15, size: 80 },
          { x: "60%", y: "5%",  rot: 5,   size: 45 },
        ].map((bolt, i) => (
          <svg key={i} className="absolute opacity-[0.07]" style={{ left: bolt.x, top: bolt.y, transform: `rotate(${bolt.rot}deg)` }} width={bolt.size} height={bolt.size * 1.8} viewBox="0 0 40 70" fill="none">
            <path d="M28 0 L10 38 L22 38 L12 70 L34 28 L20 28 Z" stroke={accent} strokeWidth="1.5" fill={op(0.12)}/>
          </svg>
        ))}
        {/* UA emblem circle */}
        <svg className="absolute bottom-10 right-10 opacity-[0.05]" width="160" height="160" viewBox="0 0 160 160" fill="none">
          <circle cx="80" cy="80" r="72" stroke={accent} strokeWidth="3"/>
          <circle cx="80" cy="80" r="60" stroke={accent} strokeWidth="1" opacity="0.5"/>
          <text x="80" y="92" textAnchor="middle" fill={accent} fontSize="44" fontFamily="serif" fontWeight="bold" opacity="0.6">UA</text>
        </svg>
      </div>
    );
  }

  if (backgroundId === "return-by-death") {
    return (
      <div className={`${base} ${z}`}>
        {/* Crystal / snowflake patterns */}
        {[
          { x: "12%", y: "20%", size: 60 },
          { x: "75%", y: "12%", size: 44 },
          { x: "65%", y: "72%", size: 52 },
        ].map((flake, i) => (
          <svg key={i} className="absolute opacity-[0.06]" style={{ left: flake.x, top: flake.y }} width={flake.size} height={flake.size} viewBox="0 0 60 60" fill="none">
            {[0,30,60,90,120,150].map((deg) => (
              <line key={deg} x1="30" y1="30" x2={30 + 28 * Math.cos((deg * Math.PI) / 180)} y2={30 + 28 * Math.sin((deg * Math.PI) / 180)} stroke={accent} strokeWidth="1.5" strokeLinecap="round"/>
            ))}
            {[0,30,60,90,120,150].map((deg) => {
              const ex = 30 + 28 * Math.cos((deg * Math.PI) / 180);
              const ey = 30 + 28 * Math.sin((deg * Math.PI) / 180);
              const mx = 30 + 16 * Math.cos((deg * Math.PI) / 180);
              const my = 30 + 16 * Math.sin((deg * Math.PI) / 180);
              return (
                <g key={`b${deg}`}>
                  <line x1={mx} y1={my} x2={mx + 8 * Math.cos(((deg+90)*Math.PI)/180)} y2={my + 8 * Math.sin(((deg+90)*Math.PI)/180)} stroke={accent} strokeWidth="1" strokeLinecap="round"/>
                  <line x1={mx} y1={my} x2={mx + 8 * Math.cos(((deg-90)*Math.PI)/180)} y2={my + 8 * Math.sin(((deg-90)*Math.PI)/180)} stroke={accent} strokeWidth="1" strokeLinecap="round"/>
                </g>
              );
            })}
            <circle cx="30" cy="30" r="4" stroke={accent} strokeWidth="1.5"/>
          </svg>
        ))}
        {/* Hourglass */}
        <svg className="absolute bottom-16 right-16 opacity-[0.05]" width="80" height="130" viewBox="0 0 80 130" fill="none">
          <rect x="5" y="5" width="70" height="12" rx="3" stroke={accent} strokeWidth="2"/>
          <rect x="5" y="113" width="70" height="12" rx="3" stroke={accent} strokeWidth="2"/>
          <path d="M10 17 L40 65 L70 17Z" stroke={accent} strokeWidth="1.5" fill={op(0.06)}/>
          <path d="M10 113 L40 65 L70 113Z" stroke={accent} strokeWidth="1.5" fill={op(0.04)}/>
          <circle cx="40" cy="65" r="3" fill={accent} opacity="0.4"/>
        </svg>
      </div>
    );
  }

  return null;
}
