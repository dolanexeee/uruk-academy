/* Uruk Academy — original minimal SVG line diagrams for the Physics and
   Chemistry books. Every figure here is drawn from scratch in the platform
   palette (lapis, gold, teal) as simple line art: no textbook figure is
   copied or traced. Referenced from content by key via
   LessonSection.diagram. */

const L = '#0e2a57'; // lapis-800
const L6 = '#1d56b4'; // lapis-600
const G = '#b57e26'; // gold-600
const T = '#12756b'; // tealdeep-500
const INK = '#16233c'; // ink-900

function Label({ x, y, children, anchor = 'middle', color = INK }: { x: number; y: number; children: string; anchor?: string; color?: string }) {
  return (
    <text x={x} y={y} textAnchor={anchor as 'middle'} fontSize="11.5" fontWeight="700" fill={color}>
      {children}
    </text>
  );
}

const ART: Record<string, React.ReactNode> = {
  /* Parallel-plate capacitor charged by a battery */
  'cap-plates': (
    <>
      <rect x="120" y="52" width="10" height="76" fill={L} />
      <rect x="190" y="52" width="10" height="76" fill={L} />
      {[-46, -30, -14, 2, 18, 34].map((dy, i) => (
        <g key={i}>
          <line x1="104" y1={90 + dy} x2="116" y2={90 + dy} stroke={G} strokeWidth="2" />
          <line x1="110" y1={84 + dy} x2="110" y2={96 + dy} stroke={G} strokeWidth="2" />
          <line x1="204" y1={90 + dy} x2="216" y2={90 + dy} stroke={G} strokeWidth="2" />
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <line key={i} x1="134" y1={68 + i * 22} x2="186" y2={68 + i * 22} stroke={T} strokeWidth="1.6" strokeDasharray="4 3" />
      ))}
      <polyline points="125,128 125,158 152,158" fill="none" stroke={L} strokeWidth="2" />
      <polyline points="195,128 195,158 168,158" fill="none" stroke={L} strokeWidth="2" />
      <line x1="152" y1="150" x2="152" y2="166" stroke={L} strokeWidth="4" />
      <line x1="158" y1="154" x2="168" y2="154" stroke={L} strokeWidth="2" />
      <line x1="158" y1="162" x2="168" y2="162" stroke={L} strokeWidth="2" />
      <Label x={125} y={38}>صفيحة موجبة +Q</Label>
      <Label x={215} y={38}>صفيحة سالبة −Q</Label>
      <Label x={160} y={105} color={T}>المجال E</Label>
      <Label x={160} y={178}>بطارية ΔV</Label>
      <Label x={248} y={95}>البعد d</Label>
      <line x1="205" y1="140" x2="245" y2="140" stroke={INK} strokeWidth="1.2" />
      <line x1="135" y1="140" x2="185" y2="140" stroke={INK} strokeWidth="1.2" />
    </>
  ),
  /* RC circuit: charge / voltage / current versus time */
  'cap-rc': (
    <>
      <line x1="45" y1="150" x2="300" y2="150" stroke={INK} strokeWidth="1.6" />
      <line x1="45" y1="150" x2="45" y2="25" stroke={INK} strokeWidth="1.6" />
      <path d="M45 148 C 110 146, 130 60, 290 48" fill="none" stroke={L6} strokeWidth="2.4" />
      <path d="M45 48 C 110 50, 140 140, 290 148" fill="none" stroke={G} strokeWidth="2.4" />
      <line x1="108" y1="150" x2="108" y2="98" stroke={INK} strokeWidth="1.2" strokeDasharray="3 3" />
      <Label x={300} y={168}>الزمن t</Label>
      <Label x={30} y={40}>q</Label>
      <Label x={215} y={40} color={L6}>شحن المتسعة q(t)</Label>
      <Label x={215} y={140} color={G}>تفريغ المتسعة q(t)</Label>
      <Label x={108} y={168}>τ = RC</Label>
    </>
  ),
  /* Loop in a magnetic field — flux through the loop */
  'flux-loop': (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <line x1="30" y1={35 + i * 30} x2="290" y2={35 + i * 30} stroke={L6} strokeWidth="1.4" />
          <polygon points={`285,${31 + i * 30} 295,${35 + i * 30} 285,${39 + i * 30}`} fill={L6} />
        </g>
      ))}
      <rect x="120" y="45" width="90" height="100" fill="#f9f1dc" fillOpacity="0.65" stroke={G} strokeWidth="2.6" />
      <line x1="165" y1="95" x2="225" y2="45" stroke={T} strokeWidth="2" />
      <polygon points="225,45 213,47 220,57" fill={T} />
      <Label x={52} y={28} color={L6}>المجال المغناطيسي B</Label>
      <Label x={165} y={162}>حلقة (مساحة A)</Label>
      <Label x={238} y={40} color={T}>العمود n</Label>
      <Label x={205} y={88} color={T}>θ</Label>
    </>
  ),
  /* AC generator: rotating coil + sinusoidal emf */
  'ac-generator': (
    <>
      <path d="M20 40 L55 40 L55 140 L20 140 Z" fill="none" stroke={L} strokeWidth="2.4" />
      <path d="M265 40 L300 40 L300 140 L265 140 Z" fill="none" stroke={L} strokeWidth="2.4" />
      <Label x={37} y={30}>N</Label>
      <Label x={282} y={30}>S</Label>
      <rect x="105" y="60" width="70" height="60" fill="none" stroke={G} strokeWidth="2.6" transform="rotate(-24 140 90)" />
      <circle cx="140" cy="90" r="4" fill={INK} />
      <line x1="60" y1="90" x2="262" y2="90" stroke={L6} strokeWidth="1.2" strokeDasharray="5 4" />
      <path d="M185 160 C 205 120, 220 120, 235 155 C 250 190, 265 190, 285 152" fill="none" stroke={T} strokeWidth="2.2" transform="translate(-40 -55)" />
      <Label x={140} y={168}>ملف يدور في مجال مغناطيسي منتظم</Label>
      <Label x={243} y={70} color={T}>ε ∝ sin ωt</Label>
    </>
  ),
  /* Series RLC circuit */
  'rlc-circuit': (
    <>
      <polyline points="60,40 120,40" fill="none" stroke={L} strokeWidth="2.2" />
      <polyline points="60,140 260,140 260,40 226,40" fill="none" stroke={L} strokeWidth="2.2" />
      <polyline points="120,40 128,40 134,28 146,52 158,28 170,52 182,40 190,40" fill="none" stroke={G} strokeWidth="2.4" />
      <Label x={155} y={20}>مقاومة R</Label>
      <path d="M196 40 c0 -10 14 -10 14 0 c0 10 14 10 14 0" fill="none" stroke={L6} strokeWidth="2.4" transform="translate(2 0)" />
      <Label x={215} y={20} color={L6}>محث L</Label>
      <line x1="60" y1="70" x2="60" y2="86" stroke={L} strokeWidth="4" />
      <line x1="60" y1="94" x2="60" y2="110" stroke={L} strokeWidth="4" />
      <polyline points="60,40 60,70" fill="none" stroke={L} strokeWidth="2.2" />
      <polyline points="60,110 60,140" fill="none" stroke={L} strokeWidth="2.2" />
      <Label x={30} y={95}>C</Label>
      <circle cx="160" cy="140" r="13" fill="none" stroke={T} strokeWidth="2.2" />
      <Label x={160} y={145} color={T}>~</Label>
      <Label x={160} y={172}>مصدر متناوب — دائرة RLC على التوالي</Label>
    </>
  ),
  /* Phasor diagram for series RLC */
  'phasor-rlc': (
    <>
      <line x1="40" y1="150" x2="290" y2="150" stroke={INK} strokeWidth="1.4" />
      <line x1="60" y1="165" x2="60" y2="20" stroke={INK} strokeWidth="1.4" />
      <line x1="60" y1="150" x2="215" y2="150" stroke={L} strokeWidth="2.6" />
      <polygon points="215,150 203,145 203,155" fill={L} />
      <line x1="215" y1="150" x2="215" y2="62" stroke={L6} strokeWidth="2.4" />
      <polygon points="215,62 210,74 220,74" fill={L6} />
      <line x1="215" y1="150" x2="215" y2="196" stroke={G} strokeWidth="2.4" />
      <polygon points="215,196 210,184 220,184" fill={G} />
      <line x1="60" y1="150" x2="215" y2="62" stroke={T} strokeWidth="2.4" />
      <polygon points="215,62 202,64 210,75" fill={T} />
      <path d="M100 150 A 40 40 0 0 0 93 128" fill="none" stroke={INK} strokeWidth="1.3" />
      <Label x={150} y={140}>V_R (باتجاه التيار)</Label>
      <Label x={243} y={66} color={L6}>V_L</Label>
      <Label x={243} y={196} color={G}>V_C</Label>
      <Label x={150} y={72} color={T}>V (المحصلة)</Label>
      <Label x={112} y={138}>φ</Label>
    </>
  ),
  /* Electromagnetic wave: perpendicular E and B */
  'em-wave': (
    <>
      <line x1="25" y1="95" x2="300" y2="95" stroke={INK} strokeWidth="1.3" />
      <polygon points="300,95 290,91 290,99" fill={INK} />
      <path d="M25 95 C 55 35, 80 35, 105 95 C 130 155, 155 155, 180 95 C 205 35, 230 35, 255 95 C 270 130, 285 130, 297 95" fill="none" stroke={L6} strokeWidth="2.4" />
      <path d="M25 95 C 50 70, 65 70, 85 95 C 105 120, 120 120, 140 95 C 160 70, 175 70, 195 95 C 215 120, 235 120, 255 95 C 272 74, 286 74, 297 95" fill="none" stroke={G} strokeWidth="2" transform="translate(0 26) scale(1 0.62) translate(0 -58)" opacity="0.9" />
      <Label x={288} y={82}>اتجاه الانتشار</Label>
      <Label x={70} y={30} color={L6}>المجال الكهربائي E</Label>
      <Label x={215} y={168} color={G}>المجال المغناطيسي B (عمودي على E وعلى الانتشار)</Label>
    </>
  ),
  /* Young's double slit and fringes */
  'young-slits': (
    <>
      <line x1="40" y1="20" x2="40" y2="160" stroke={L} strokeWidth="2.2" strokeDasharray="6 4" />
      <line x1="110" y1="15" x2="110" y2="72" stroke={L} strokeWidth="5" />
      <line x1="110" y1="84" x2="110" y2="96" stroke={L} strokeWidth="5" />
      <line x1="110" y1="108" x2="110" y2="165" stroke={L} strokeWidth="5" />
      <line x1="110" y1="72" x2="255" y2="30" stroke={G} strokeWidth="1.3" />
      <line x1="110" y1="108" x2="255" y2="150" stroke={G} strokeWidth="1.3" />
      <line x1="110" y1="72" x2="255" y2="90" stroke={T} strokeWidth="1.3" />
      <line x1="110" y1="108" x2="255" y2="90" stroke={T} strokeWidth="1.3" />
      <line x1="262" y1="15" x2="262" y2="165" stroke={L} strokeWidth="3" />
      {[30, 58, 90, 122, 150].map((y, i) => (
        <line key={i} x1="258" y1={y - 7} x2="266" y2={y - 7} stroke={G} strokeWidth={y === 90 ? 5 : 3} />
      ))}
      <Label x={40} y={176}>مصدر ضوئي</Label>
      <Label x={110} y={176}>شقّان (البعد بينهما d)</Label>
      <Label x={268} y={176}>شاشة (البعد L)</Label>
    </>
  ),
  /* Photoelectric effect bench */
  'photoelectric': (
    <>
      <rect x="205" y="55" width="10" height="80" fill={L} />
      <rect x="70" y="60" width="26" height="70" fill="none" stroke={L} strokeWidth="2" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <line x1="100" y1={75 + i * 22} x2="160" y2={85 + i * 22} stroke={G} strokeWidth="2.2" />
          <polygon points={`160,${85 + i * 22} 149,${81 + i * 22} 151,${91 + i * 22}`} fill={G} />
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx={178 + i * 8} cy={78 + i * 24} r="3.4" fill={T} />
          <line x1={182 + i * 8} y1={78 + i * 24} x2={196 + i * 8} y2={78 + i * 24} stroke={T} strokeWidth="1.4" />
        </g>
      ))}
      <polyline points="210,135 210,158 130,158 130,130" fill="none" stroke={L} strokeWidth="2" />
      <circle cx="130" cy="158" r="11" fill="none" stroke={INK} strokeWidth="1.8" />
      <Label x={130} y={162}>A</Label>
      <Label x={83} y={48}>ضوء (f)</Label>
      <Label x={196} y={40} color={T}>إلكترونات ضوئية</Label>
      <Label x={226} y={100}>لوح معدني</Label>
      <Label x={130} y={182}>مقياس التيار</Label>
    </>
  ),
  /* Bohr atom with a transition */
  'bohr-atom': (
    <>
      <circle cx="160" cy="95" r="7" fill={G} />
      <circle cx="160" cy="95" r="34" fill="none" stroke={L6} strokeWidth="1.8" />
      <circle cx="160" cy="95" r="62" fill="none" stroke={L6} strokeWidth="1.8" />
      <circle cx="160" cy="95" r="90" fill="none" stroke={L6} strokeWidth="1.8" strokeDasharray="5 4" />
      <circle cx="194" cy="95" r="4.5" fill={T} />
      <circle cx="160" cy="33" r="4.5" fill={T} />
      <line x1="163" y1="40" x2="186" y2="84" stroke={G} strokeWidth="2.2" />
      <polygon points="188,88 178,84 186,76" fill={G} />
      <Label x={160} y={200}>نواة</Label>
      <Label x={238} y={62}>n = 2</Label>
      <Label x={252} y={34}>n = 3</Label>
      <Label x={205} y={120} color={G}>فوتون منبعث hf = E₃ − E₂</Label>
    </>
  ),
  /* PN junction at equilibrium */
  'pn-junction': (
    <>
      <rect x="45" y="45" width="105" height="95" fill="#d7e4f8" />
      <rect x="170" y="45" width="105" height="95" fill="#fbe9b8" />
      <rect x="150" y="45" width="20" height="95" fill="#efe0bc" stroke={INK} strokeWidth="1.2" strokeDasharray="4 3" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx={70 + (i % 2) * 34} cy={68 + Math.floor(i / 2) * 44} r="7" fill="none" stroke={L} strokeWidth="1.8" />
          <line x1={65 + (i % 2) * 34} y1={68 + Math.floor(i / 2) * 44} x2={75 + (i % 2) * 34} y2={68 + Math.floor(i / 2) * 44} stroke={L} strokeWidth="1.8" />
        </g>
      ))}
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={196 + (i % 2) * 36} cy={68 + Math.floor(i / 2) * 44} r="4.6" fill={G} />
      ))}
      <Label x={97} y={32}>نوع p (فجوات +)</Label>
      <Label x={222} y={32}>نوع n (إلكترونات −)</Label>
      <Label x={160} y={160}>منطقة النضوب</Label>
    </>
  ),
  /* Laser three-level scheme */
  'laser-levels': (
    <>
      <line x1="60" y1="40" x2="180" y2="40" stroke={L} strokeWidth="2.6" />
      <line x1="60" y1="95" x2="180" y2="95" stroke={L6} strokeWidth="2.6" />
      <line x1="60" y1="150" x2="180" y2="150" stroke={L} strokeWidth="2.6" />
      <line x1="85" y1="150" x2="85" y2="44" stroke={G} strokeWidth="2.2" />
      <polygon points="85,40 80,52 90,52" fill={G} />
      <line x1="130" y1="44" x2="130" y2="91" stroke={T} strokeWidth="1.8" strokeDasharray="4 3" />
      <line x1="155" y1="95" x2="155" y2="146" stroke="#c0392b" strokeWidth="2.4" />
      <polygon points="155,150 150,138 160,138" fill="#c0392b" />
      <line x1="155" y1="120" x2="255" y2="120" stroke="#c0392b" strokeWidth="2" strokeDasharray="2 4" />
      <Label x={120} y={28}>مستوى الضخ</Label>
      <Label x={120} y={84}>المستوى الليزري العلوي (شبه مستقر)</Label>
      <Label x={120} y={168}>المستوى الأرضي</Label>
      <Label x={62} y={100} color={G}>ضخّ</Label>
      <Label x={262} y={124} color="#c0392b">شعاع الليزر</Label>
    </>
  ),
  /* Radioactive decay curve with half-lives */
  'decay-curve': (
    <>
      <line x1="45" y1="155" x2="300" y2="155" stroke={INK} strokeWidth="1.6" />
      <line x1="45" y1="155" x2="45" y2="22" stroke={INK} strokeWidth="1.6" />
      <path d="M45 30 C 90 34, 105 92, 150 118 C 195 142, 240 150, 295 153" fill="none" stroke={L6} strokeWidth="2.4" />
      <line x1="45" y1="92" x2="118" y2="92" stroke={INK} strokeWidth="1.1" strokeDasharray="3 3" />
      <line x1="118" y1="155" x2="118" y2="92" stroke={INK} strokeWidth="1.1" strokeDasharray="3 3" />
      <line x1="45" y1="123" x2="185" y2="123" stroke={INK} strokeWidth="1.1" strokeDasharray="3 3" />
      <line x1="185" y1="155" x2="185" y2="123" stroke={INK} strokeWidth="1.1" strokeDasharray="3 3" />
      <Label x={28} y={34}>N₀</Label>
      <Label x={28} y={96}>N₀/2</Label>
      <Label x={24} y={127}>N₀/4</Label>
      <Label x={118} y={170}>T½</Label>
      <Label x={185} y={170}>2T½</Label>
      <Label x={292} y={170}>t</Label>
    </>
  ),
  /* Hess cycle: direct route vs two-step route between the same states */
  'hess-cycle': (
    <>
      <rect x="118" y="16" width="84" height="24" rx="5" fill="none" stroke={L} strokeWidth="1.8" />
      <Label x={160} y={32}>متفاعلات</Label>
      <rect x="22" y="128" width="84" height="24" rx="5" fill="none" stroke={L} strokeWidth="1.8" />
      <Label x={64} y={144}>حالة وسطية</Label>
      <rect x="214" y="128" width="84" height="24" rx="5" fill="none" stroke={L} strokeWidth="1.8" />
      <Label x={256} y={144}>نواتج</Label>
      <line x1="128" y1="46" x2="72" y2="122" stroke={T} strokeWidth="2" />
      <path d="M72 122 l-3 -10 M72 122 l-9 -5" stroke={T} strokeWidth="2" fill="none" />
      <line x1="110" y1="140" x2="208" y2="140" stroke={T} strokeWidth="2" />
      <path d="M208 140 l-10 -3 M208 140 l-10 3" stroke={T} strokeWidth="2" fill="none" />
      <line x1="196" y1="42" x2="252" y2="122" stroke={G} strokeWidth="2.2" />
      <path d="M252 122 l-11 -4 M252 122 l-2 -11" stroke={G} strokeWidth="2.2" fill="none" />
      <Label x={66} y={88} color={T}>ΔH₂</Label>
      <Label x={160} y={132} color={T}>ΔH₃</Label>
      <Label x={246} y={80} color={G}>ΔH₁</Label>
      <Label x={160} y={176} color={INK}>ΔH₁ = ΔH₂ + ΔH₃</Label>
    </>
  ),
  /* Galvanic (voltaic) cell: Zn anode, Cu cathode, salt bridge, voltmeter */
  'galvanic-cell': (
    <>
      <path d="M40 78 L40 158 L128 158 L128 78" fill="none" stroke={INK} strokeWidth="1.8" />
      <path d="M192 78 L192 158 L280 158 L280 78" fill="none" stroke={INK} strokeWidth="1.8" />
      <line x1="40" y1="104" x2="128" y2="104" stroke={L6} strokeWidth="1.4" strokeDasharray="4 3" />
      <line x1="192" y1="104" x2="280" y2="104" stroke={L6} strokeWidth="1.4" strokeDasharray="4 3" />
      <rect x="72" y="46" width="12" height="86" fill={L} />
      <rect x="236" y="46" width="12" height="86" fill={G} />
      <path d="M118 96 L118 62 Q118 44 160 44 Q202 44 202 62 L202 96" fill="none" stroke={T} strokeWidth="2.4" />
      <polyline points="78,46 78,26 148,26" fill="none" stroke={INK} strokeWidth="1.8" />
      <polyline points="242,26 172,26" fill="none" stroke={INK} strokeWidth="1.8" />
      <circle cx="160" cy="26" r="11" fill="#fff" stroke={INK} strokeWidth="1.8" />
      <Label x={160} y={30}>V</Label>
      <path d="M96 20 l10 0 M101 15 l6 5 l-6 5" stroke={G} strokeWidth="2" fill="none" />
      <Label x={112} y={14} color={G}>e⁻</Label>
      <Label x={78} y={176}>Zn — أنود (−)</Label>
      <Label x={242} y={176}>Cu — كاثود (+)</Label>
      <Label x={160} y={88} color={T}>جسر ملحي</Label>
      <Label x={84} y={118}>Zn²⁺</Label>
      <Label x={236} y={118}>Cu²⁺</Label>
    </>
  ),
  /* Electrolytic cell driven by a DC source */
  'electrolysis-cell': (
    <>
      <path d="M86 84 L86 162 L234 162 L234 84" fill="none" stroke={INK} strokeWidth="1.8" />
      <line x1="86" y1="110" x2="234" y2="110" stroke={L6} strokeWidth="1.4" strokeDasharray="4 3" />
      <rect x="116" y="52" width="10" height="82" fill={L} />
      <rect x="194" y="52" width="10" height="82" fill={G} />
      <polyline points="121,52 121,30 146,30" fill="none" stroke={INK} strokeWidth="1.8" />
      <polyline points="199,52 199,30 174,30" fill="none" stroke={INK} strokeWidth="1.8" />
      <line x1="146" y1="22" x2="146" y2="38" stroke={INK} strokeWidth="4" />
      <line x1="152" y1="26" x2="168" y2="26" stroke={INK} strokeWidth="2" />
      <line x1="152" y1="34" x2="168" y2="34" stroke={INK} strokeWidth="2" />
      <line x1="174" y1="22" x2="174" y2="38" stroke={INK} strokeWidth="2" />
      <Label x={160} y={12}>مصدر تيار مستمر</Label>
      <Label x={121} y={150}>كاثود (−)</Label>
      <Label x={199} y={150}>أنود (+)</Label>
      <Label x={104} y={100} color={L6}>أيونات +</Label>
      <Label x={216} y={100} color={L6}>أيونات −</Label>
      <path d="M136 122 l14 0 M145 117 l6 5 l-6 5" stroke={T} strokeWidth="1.8" fill="none" />
      <path d="M184 122 l-14 0 M175 117 l-6 5 l6 5" stroke={T} strokeWidth="1.8" fill="none" />
      <Label x={160} y={178}>محلول إلكتروليتي</Label>
    </>
  ),
  /* Strong acid – strong base titration curve with equivalence point */
  'titration-curve': (
    <>
      <line x1="52" y1="162" x2="300" y2="162" stroke={INK} strokeWidth="1.6" />
      <line x1="52" y1="162" x2="52" y2="20" stroke={INK} strokeWidth="1.6" />
      <path d="M56 148 C 110 146, 138 142, 152 128 C 162 118, 164 108, 166 92 C 168 70, 172 48, 190 40 C 220 28, 262 27, 296 27" fill="none" stroke={L6} strokeWidth="2.4" />
      <line x1="52" y1="95" x2="167" y2="95" stroke={INK} strokeWidth="1.1" strokeDasharray="3 3" />
      <line x1="167" y1="162" x2="167" y2="95" stroke={INK} strokeWidth="1.1" strokeDasharray="3 3" />
      <circle cx="167" cy="95" r="3.5" fill={G} />
      <Label x={30} y={28}>pH</Label>
      <Label x={30} y={99}>7</Label>
      <Label x={167} y={176}>حجم القاعدة عند التكافؤ</Label>
      <Label x={238} y={88} color={G}>نقطة التكافؤ</Label>
      <Label x={250} y={152}>حجم القاعدة المضافة</Label>
    </>
  ),
  /* Eukaryotic cell — schematic organelles (original line art) */
  'cell-schematic': (
    <>
      <ellipse cx="160" cy="98" rx="128" ry="70" fill="#fdfaf2" stroke={L} strokeWidth="2.2" />
      <ellipse cx="160" cy="98" rx="119" ry="63" fill="none" stroke={L6} strokeWidth="1" strokeDasharray="3 3" />
      <path d="M118 62 q32 -14 64 0 M114 128 q46 16 92 0" fill="none" stroke={G} strokeWidth="1.6" strokeDasharray="5 3" />
      <circle cx="152" cy="95" r="29" fill="#e8eefb" stroke={L6} strokeWidth="2" />
      <circle cx="152" cy="95" r="10" fill={G} />
      <ellipse cx="228" cy="58" rx="17" ry="8" fill="none" stroke={T} strokeWidth="2" transform="rotate(-18 228 58)" />
      <path d="M215 60 q6 -5 12 0 q6 5 12 0" fill="none" stroke={T} strokeWidth="1.4" transform="rotate(-18 228 58)" />
      <ellipse cx="88" cy="128" rx="16" ry="8" fill="none" stroke={T} strokeWidth="2" transform="rotate(14 88 128)" />
      <path d="M76 126 q6 -5 12 0 q6 5 12 0" fill="none" stroke={T} strokeWidth="1.4" transform="rotate(14 88 128)" />
      <ellipse cx="76" cy="58" rx="19" ry="10" fill="#e2f2ec" stroke={T} strokeWidth="2" />
      <path d="M64 54 h24 M64 60 h24 M70 48 v20 M82 48 v20" stroke={T} strokeWidth="1.1" />
      <path d="M205 118 q22 -8 40 2 M207 127 q20 -7 36 2 M210 136 q16 -5 30 2" fill="none" stroke={L6} strokeWidth="2" />
      <ellipse cx="205" cy="72" rx="21" ry="12" fill="#dbe7fa" fillOpacity="0.7" stroke={L6} strokeWidth="1.6" />
      {[[105, 72], [196, 118], [128, 140], [238, 96], [96, 100]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.4" fill={G} />
      ))}
      <line x1="160" y1="28" x2="160" y2="18" stroke={INK} strokeWidth="1.1" />
      <Label x={160} y={12}>الغشاء البلازمي</Label>
      <line x1="140" y1="70" x2="118" y2="46" stroke={INK} strokeWidth="1.1" />
      <Label x={104} y={40}>النواة</Label>
      <line x1="240" y1="50" x2="262" y2="38" stroke={INK} strokeWidth="1.1" />
      <Label x={278} y={34}>الميتوكوندريا</Label>
      <line x1="70" y1="48" x2="52" y2="32" stroke={INK} strokeWidth="1.1" />
      <Label x={44} y={26}>بلاستيدة خضراء</Label>
      <line x1="238" y1="126" x2="264" y2="140" stroke={INK} strokeWidth="1.1" />
      <Label x={272} y={152}>جهاز كولجي</Label>
      <line x1="198" y1="84" x2="196" y2={158} stroke={INK} strokeWidth="1.1" />
      <Label x={196} y={172}>فجوة</Label>
      <Label x={80} y={172}>السيتوبلازم</Label>
    </>
  ),
  /* Flower — longitudinal schematic of the reproductive parts */
  'flower': (
    <>
      <line x1="160" y1="188" x2="160" y2="126" stroke={T} strokeWidth="3" />
      <path d="M160 128 C 128 122, 116 132, 108 148 C 126 150, 146 144, 160 134 C 174 144, 194 150, 212 148 C 204 132, 192 122, 160 128" fill="#e2f2ec" stroke={T} strokeWidth="1.8" />
      <path d="M160 122 C 118 108, 102 74, 118 44 C 142 66, 154 92, 160 110" fill="#fdfaf2" stroke={G} strokeWidth="2" />
      <path d="M160 122 C 202 108, 218 74, 202 44 C 178 66, 166 92, 160 110" fill="#fdfaf2" stroke={G} strokeWidth="2" />
      <path d="M160 118 C 146 96, 146 74, 160 52 C 174 74, 174 96, 160 118" fill="#f9f1dc" stroke={G} strokeWidth="1.6" />
      <ellipse cx="160" cy="104" rx="12" ry="15" fill="#fff" stroke={L} strokeWidth="2" />
      <circle cx="160" cy="106" r="4" fill={G} />
      <line x1="160" y1="89" x2="160" y2="58" stroke={L} strokeWidth="2" />
      <ellipse cx="160" cy="52" rx="9" ry="5" fill={G} />
      <path d="M152 92 C 138 78, 128 68, 122 54" fill="none" stroke={L6} strokeWidth="1.8" />
      <path d="M168 92 C 182 78, 192 68, 198 54" fill="none" stroke={L6} strokeWidth="1.8" />
      <ellipse cx="121" cy="50" rx="7" ry="4" fill={G} transform="rotate(-38 121 50)" />
      <ellipse cx="199" cy="50" rx="7" ry="4" fill={G} transform="rotate(38 199 50)" />
      <line x1="160" y1="46" x2="160" y2="34" stroke={INK} strokeWidth="1.1" />
      <Label x={160} y={28}>الميسم</Label>
      <line x1="126" y1="46" x2="98" y2="34" stroke={INK} strokeWidth="1.1" />
      <Label x={76} y={30}>المُتك (لقاح)</Label>
      <line x1="126" y1="82" x2="98" y2="82" stroke={INK} strokeWidth="1.1" />
      <Label x={72} y={86}>البتلة</Label>
      <line x1="168" y1="72" x2="196" y2="66" stroke={INK} strokeWidth="1.1" />
      <Label x={222} y={70}>القلم</Label>
      <line x1="172" y1="104" x2="200" y2="104" stroke={INK} strokeWidth="1.1" />
      <Label x={228} y={108}>المبيض والبويضة</Label>
      <line x1="128" y1="140" x2="102" y2="152" stroke={INK} strokeWidth="1.1" />
      <Label x={78} y={164}>السبلة</Label>
      <Label x={196} y={164}>ساق الزهرة</Label>
    </>
  ),
  /* DNA replication fork — helicase, parental and new strands */
  'dna-replication': (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={44 + i * 20} y1="82" x2={44 + i * 20} y2="108" stroke={G} strokeWidth="1.6" />
      ))}
      <path d="M30 82 H140 C 200 82, 240 52, 296 44" fill="none" stroke={L} strokeWidth="2.4" />
      <path d="M30 108 H140 C 200 108, 240 138, 296 146" fill="none" stroke={L} strokeWidth="2.4" />
      <path d="M158 84 C 210 82, 244 60, 290 53" fill="none" stroke={G} strokeWidth="2.2" strokeDasharray="6 3" />
      <path d="M158 106 C 210 108, 244 130, 290 137" fill="none" stroke={G} strokeWidth="2.2" strokeDasharray="6 3" />
      <circle cx="146" cy="95" r="13" fill="#f9f1dc" stroke={G} strokeWidth="2.2" />
      <path d="M140 95 l5 -6 l5 6 l-5 6 z" fill={G} />
      <polygon points="296,44 282,40 286,52" fill={L} />
      <polygon points="296,146 282,150 286,138" fill={L} />
      <Label x={70} y={64} color={L}>الشريط الأصلي (القالب)</Label>
      <Label x={70} y={130} color={L}>الشريط الأصلي</Label>
      <Label x={238} y={30} color={G}>شريط جديد</Label>
      <Label x={238} y={168} color={G}>شريط جديد</Label>
      <Label x={146} y={128} color={G}>إنزيم فكّ الالتواء</Label>
      <Label x={146} y={142} color={G}>(الهيليكيز)</Label>
    </>
  ),
  /* Pedigree — X-linked recessive inheritance across three generations */
  'pedigree': (
    <>
      <rect x="106" y="26" width="24" height="24" fill="#fff" stroke={INK} strokeWidth="1.8" />
      <circle cx="182" cy="38" r="12" fill="#fff" stroke={INK} strokeWidth="1.8" />
      <circle cx="182" cy="38" r="3.4" fill={G} />
      <line x1="130" y1="38" x2="170" y2="38" stroke={INK} strokeWidth="1.6" />
      <line x1="150" y1="38" x2="150" y2="66" stroke={INK} strokeWidth="1.6" />
      <line x1="66" y1="66" x2="234" y2="66" stroke={INK} strokeWidth="1.6" />
      <line x1="66" y1="66" x2="66" y2="80" stroke={INK} strokeWidth="1.6" />
      <line x1="150" y1="66" x2="150" y2="80" stroke={INK} strokeWidth="1.6" />
      <line x1="234" y1="66" x2="234" y2="80" stroke={INK} strokeWidth="1.6" />
      <circle cx="66" cy="92" r="12" fill="#fff" stroke={INK} strokeWidth="1.8" />
      <circle cx="150" cy="92" r="12" fill="#fff" stroke={INK} strokeWidth="1.8" />
      <circle cx="150" cy="92" r="3.4" fill={G} />
      <rect x="222" y="80" width="24" height="24" fill={L} stroke={INK} strokeWidth="1.8" />
      <circle cx="282" cy="92" r="12" fill="#fff" stroke={INK} strokeWidth="1.8" />
      <line x1="246" y1="92" x2="270" y2="92" stroke={INK} strokeWidth="1.6" />
      <line x1="258" y1="92" x2="258" y2="118" stroke={INK} strokeWidth="1.6" />
      <circle cx="258" cy="130" r="12" fill="#fff" stroke={INK} strokeWidth="1.8" />
      <circle cx="258" cy="130" r="3.4" fill={G} />
      <Label x={18} y={42}>I</Label>
      <Label x={18} y={96}>II</Label>
      <Label x={18} y={134}>III</Label>
      <rect x="52" y="158" width="12" height="12" fill={L} stroke={INK} strokeWidth="1.4" />
      <Label x={70} y={168} anchor="start">مصاب</Label>
      <circle cx="140" cy="164" r="6" fill="#fff" stroke={INK} strokeWidth="1.4" />
      <circle cx="140" cy="164" r="1.8" fill={G} />
      <Label x={152} y={168} anchor="start">حاملة</Label>
      <rect x="212" y="158" width="12" height="12" fill="#fff" stroke={INK} strokeWidth="1.4" />
      <Label x={230} y={168} anchor="start">سليم</Label>
    </>
  ),
};

export default function Diagram({ name }: { name: string }) {
  const art = ART[name];
  if (!art) return null;
  return (
    <figure className="mt-3 overflow-hidden rounded-2xl bg-cream-100/70 ring-1 ring-cream-300" dir="ltr">
      <svg viewBox="0 0 320 190" className="mx-auto block w-full max-w-[520px]" role="img" aria-label={name}>
        {art}
      </svg>
      <figcaption className="px-4 pb-2.5 text-center text-[11.5px] font-semibold text-ink-400" dir="rtl">
        رسم توضيحي مبسّط بأسلوب الأكاديمية — ليس صورة من الكتاب
      </figcaption>
    </figure>
  );
}
