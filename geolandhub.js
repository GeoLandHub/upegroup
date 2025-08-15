import { useState } from "react";
import { Search, Map, Upload, CreditCard, Download, GraduationCap, Compass, LifeBuoy, Users, Globe, FileText, Shield, Star, Layers, Ruler, CalendarClock, Info, CheckCircle, XCircle, AlertTriangle, FileUp } from "lucide-react";

const I18N = {
  th: {
    brand: "GeoLandHub",
    nav: { marketplace: "Marketplace", features: "ฟีเจอร์", flow: "ขั้นตอนการใช้งาน", dashboard: "Dashboard", knowledge: "ความรู้", pricing: "ราคา", services: "บริการ", about: "เกี่ยวกับเรา", contact: "ติดต่อ", product: "รายละเอียดสินค้า", seller: "อัปโหลดขาย" },
    heroTitle: "GeoLandHub",
    heroDesc: "ศูนย์กลางข้อมูล GIS สำหรับการซื้อ-ขาย วิเคราะห์ ให้ความรู้ การสอนออนไลน์ และบริการวิเคราะห์เชิงลึกครบวงจร",
    ctaStart: "เริ่มต้นใช้งาน",
    ctaLearn: "ดูรายละเอียด",
    marketplace: {
      title: "Marketplace GIS",
      placeholder: "ค้นหา: อาคาร, ถนน, แปลงที่ดิน, น้ำ...",
      province: "จังหวัด (ทุกจังหวัด)",
      type: "ประเภทชั้นข้อมูล",
      price: "ช่วงราคา",
      search: "ค้นหา",
      sellerCta: "อัปโหลดเพื่อขาย",
      draw: "วาดพื้นที่",
      bbox: "ขอบเขต (BBox)",
      minLon: "MinLon",
      minLat: "MinLat",
      maxLon: "MaxLon",
      maxLat: "MaxLat"
    },
    flowTitle: "ขั้นตอนการใช้งาน (User Flow)",
    dashboardTitle: "User Dashboard (ตัวอย่าง)",
    featuresTitle: "ฟีเจอร์หลัก",
    knowledgeTitle: "ศูนย์ความรู้ (Knowledge Hub)",
    pricingTitle: "แพ็กเกจราคา",
    servicesTitle: "บริการวิเคราะห์ GIS",
    aboutTitle: "เกี่ยวกับเรา",
    aboutBody: "GeoLandHub ก่อตั้งขึ้นเพื่อเป็นศูนย์กลางในการแลกเปลี่ยน ซื้อ-ขายไฟล์ GIS การวิเคราะห์เชิงลึก การเรียนรู้ออนไลน์ และบริการด้านภูมิสารสนเทศสำหรับทุกภาคส่วน ตั้งแต่นักศึกษา ผู้เชี่ยวชาญ ไปจนถึงองค์กรขนาดใหญ่ เรามุ่งมั่นที่จะสร้างสังคม GIS ที่เข้มแข็งและยั่งยืน พร้อมบริการและเทคโนโลยีที่ทันสมัย",
    contactTitle: "ติดต่อเรา",
    contactEmail: "Email",
    contactPhone: "โทร",
    footerAbout: "เกี่ยวกับ",
    footerLaw: "กฎหมาย",
    footerContact: "ติดต่อ",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookie: "Cookie Policy",
    productTitle: "รายละเอียดสินค้า (ตัวอย่าง)",
    uploadTitle: "Upload Wizard – ฝากขายไฟล์",
    next: "ถัดไป",
    prev: "ย้อนกลับ",
    save: "บันทึก",
    addToCart: "เพิ่มลงตะกร้า",
    preview: "ดาวน์โหลดตัวอย่าง",
    requestQuote: "ขอใบเสนอราคา",
    tryTool: "ลองเครื่องมือ",
    startFree: "เริ่มต้นฟรี",
  },
  en: {
    brand: "GeoLandHub",
    nav: { marketplace: "Marketplace", features: "Features", flow: "User Flow", dashboard: "Dashboard", knowledge: "Knowledge", pricing: "Pricing", services: "Services", about: "About", contact: "Contact", product: "Product Detail", seller: "Upload" },
    heroTitle: "GeoLandHub",
    heroDesc: "The hub for GIS data buying & selling, analysis tools, learning, and expert services—all in one.",
    ctaStart: "Get started",
    ctaLearn: "Learn more",
    marketplace: {
      title: "GIS Marketplace",
      placeholder: "Search: buildings, roads, parcels, water...",
      province: "Province (All)",
      type: "Layer type",
      price: "Price range",
      search: "Search",
      sellerCta: "Upload to sell",
      draw: "Draw area",
      bbox: "Bounding Box (BBox)",
      minLon: "MinLon",
      minLat: "MinLat",
      maxLon: "MaxLon",
      maxLat: "MaxLat"
    },
    flowTitle: "User Flow",
    dashboardTitle: "User Dashboard (Sample)",
    featuresTitle: "Key Features",
    knowledgeTitle: "Knowledge Hub",
    pricingTitle: "Pricing",
    servicesTitle: "GIS Analysis Services",
    aboutTitle: "About us",
    aboutBody: "GeoLandHub exists to enable a thriving GIS ecosystem where data exchange, deep analysis, online learning, and expert services come together for students, professionals, and enterprises.",
    contactTitle: "Contact us",
    contactEmail: "Email",
    contactPhone: "Phone",
    footerAbout: "About",
    footerLaw: "Legal",
    footerContact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    cookie: "Cookie Policy",
    productTitle: "Product Detail (Sample)",
    uploadTitle: "Upload Wizard – Sell your data",
    next: "Next",
    prev: "Back",
    save: "Save",
    addToCart: "Add to cart",
    preview: "Download sample",
    requestQuote: "Request quote",
    tryTool: "Try tool",
    startFree: "Start free",
  }
};

export default function GeoLandHubMockup() {
  // Inject Leaflet CSS once
  React.useEffect(() => {
    if (document.getElementById('leaflet-css')) return;
    const l = document.createElement('link');
    l.id = 'leaflet-css';
    l.rel = 'stylesheet';
    l.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(l);
  }, []);

  // --- Google Maps loader state (for Earth background) ---
  const [gmReady, setGmReady] = useState(false);

  // dynamic loader
  const loadGoogle = () => new Promise((resolve, reject) => {
    if (window.google && window.google.maps) return resolve();
    const s = document.createElement('script');
    s.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&v=quarterly&loading=async";
    s.async = true; s.defer = true;
    s.onload = () => resolve();
    s.onerror = (e) => reject(e);
    document.head.appendChild(s);
  });

  // ===== OSM (Leaflet) free background block =====
  const OSMBlock = ({lang}) => {
    const [geojson, setGeojson] = useState(null);
    const [coords, setCoords] = useState(null);

    // Lazy-load Leaflet & shpjs only on client
    const [L, setL] = useState(null);
    const [shpLib, setShpLib] = useState(null);
    const [map, setMap] = useState(null);
    const [base, setBase] = useState('osm'); // 'osm' | 'maptiler'

    React.useEffect(()=>{
      (async()=>{
        if (!L) {
          const leaflet = await import('leaflet');
          setL(leaflet);
        }
        if (!shpLib) {
          try {
            const mod = await import('shpjs');
            setShpLib(mod.default || mod);
          } catch {}
        }
      })();
    },[]);

    const initMap = (el) => {
      if (!el || map || !L) return;
      const m = L.map(el).setView([13.7563, 100.5018], 12);

      const applyBase = () => {
        if (m.__base) { m.removeLayer(m.__base); m.__base = null; }
        if (base === 'osm') {
          m.__base = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors'
          }).addTo(m);
        } else if (base === 'maptiler') {
          const key = window.MAPTILER_KEY || 'YOUR_MAPTILER_KEY';
          m.__base = L.tileLayer(`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=${key}`, {
            maxZoom: 20,
            attribution: '&copy; MapTiler & OpenStreetMap contributors'
          }).addTo(m);
        }
      };
      applyBase();

      // show pointer coordinates
      m.on('mousemove', (e)=> setCoords([e.latlng.lat.toFixed(6), e.latlng.lng.toFixed(6)]));
      m.on('click', (e)=> setCoords([e.latlng.lat.toFixed(6), e.latlng.lng.toFixed(6)]));

      // expose for later base switching
      m.__applyBase = applyBase;

      setMap(m);
    };

    // Render/refresh GeoJSON layer
    React.useEffect(()=>{
      if (!map || !L) return;
      if (!geojson) return;
      if (map.__glhGeo) { map.removeLayer(map.__glhGeo); map.__glhGeo = null; }
      const layer = L.geoJSON(geojson, {
        style: { color: '#10b981', weight: 2 },
        onEachFeature: (f, lyr) => {
          const name = f.properties && (f.properties.name || f.properties.NAME || f.properties.id || 'feature');
          lyr.bindPopup(name);
        }
      }).addTo(map);
      map.__glhGeo = layer;
      try { map.fitBounds(layer.getBounds(), { padding: [20,20] }); } catch {}
    }, [geojson, map, L]);

    // react to base change
    React.useEffect(()=>{ if (map && map.__applyBase) map.__applyBase(); }, [base]);

    // Handle file input (.geojson)
    const onGeoJsonPicked = async (file) => {
      try {
        const txt = await file.text();
        const data = JSON.parse(txt);
        setGeojson(data);
      } catch (e) {
        alert(lang==='th'? 'อ่าน GeoJSON ไม่สำเร็จ' : 'Failed to read GeoJSON');
      }
    };

    // Handle shapefile .zip via shpjs -> GeoJSON
    const onZipPicked = async (file) => {
      try {
        if (!shpLib) throw new Error('shpjs not loaded');
        const buf = await file.arrayBuffer();
        const data = await shpLib(buf); // FeatureCollection or array of layers
        const normalized = Array.isArray(data)
          ? ({ type:'FeatureCollection', features: data.flatMap(d=> d.features||[]) })
          : data;
        setGeojson(normalized);
      } catch (e) {
        alert((lang==='th'? 'อ่าน Shapefile (.zip) ไม่สำเร็จ: ' : 'Failed to read Shapefile (.zip): ') + (e?.message||e));
      }
    };

    return (
      <div className="bg-white border rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold">{lang==='th'? 'แผนที่ฟรี (OpenStreetMap)' : 'Free Background Map (OpenStreetMap)'} </h3>
          <div className="flex gap-2 items-center text-sm">
            <label className="px-3 py-2 rounded-lg border hover:bg-gray-50 cursor-pointer">
              {lang==='th'? 'นำเข้า GeoJSON' : 'Import GeoJSON'}
              <input type="file" accept=".geojson,application/geo+json,application/json" className="hidden" onChange={(e)=> e.target.files && onGeoJsonPicked(e.target.files[0]) } />
            </label>
            <label className="px-3 py-2 rounded-lg border hover:bg-gray-50 cursor-pointer">
              {lang==='th'? 'นำเข้า Shapefile (.zip)' : 'Import Shapefile (.zip)'}
              <input type="file" accept=".zip,application/zip" className="hidden" onChange={(e)=> e.target.files && onZipPicked(e.target.files[0]) } />
            </label>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Base:</span>
              <select value={base} onChange={(e)=>setBase(e.target.value)} className="border rounded-lg px-2 py-1">
                <option value="osm">OSM (ฟรี)</option>
                <option value="maptiler">MapTiler (ต้องใส่ key)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div ref={initMap} className="h-80 rounded-xl border relative overflow-hidden"/>
            <div className="mt-2 text-xs text-gray-600 flex items-center justify-between">
              <div>{lang==='th'? 'เครดิตแผนที่: © ผู้ร่วมสมทบ OpenStreetMap' : 'Map credits: © OpenStreetMap contributors'}</div>
              <div>{coords? `${coords[0]}, ${coords[1]}` : (lang==='th'? 'เลื่อนเมาส์เพื่อดูพิกัด' : 'Move cursor to see coordinates')}</div>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <div className="font-medium mb-1">{lang==='th'? 'เหตุผลที่เลือก OSM' : 'Why OSM?'}</div>
            <ul className="list-disc ml-5 space-y-1">
              <li>{lang==='th'? 'ฟรี ไม่มีค่าใช้จ่ายเพิ่ม (ปริมาณใช้งานไม่สูงเกินไป)' : 'Free to use (for moderate traffic)'}</li>
              <li>{lang==='th'? 'ต้องแสดงเครดิต “© OpenStreetMap contributors”' : 'Must show credit “© OpenStreetMap contributors”'}</li>
              <li>{lang==='th'? 'เหมาะเป็นพื้นหลัง + ซ้อนชั้นข้อมูลของคุณ (.geojson)' : 'Great as background + overlay your .geojson'}</li>
            </ul>
            <div className="mt-3 text-xs text-gray-500">
              {lang==='th'? 'หมายเหตุ: ถ้าทราฟฟิกสูง/เชิงพาณิชย์ ควรใช้ผู้ให้บริการ Tile (เช่น MapTiler Free tier) หรือโฮสต์ tile เอง' : 'Note: For high-traffic/commercial, use a tile provider (e.g., MapTiler free tier) or self-host tiles.'}
            </div>
          </div>
        </div>
      </div>
    );
  };
  // --- Google Maps loader state (for Earth background) ---
  const [gmReady, setGmReady] = useState(false);

  // dynamic loader
  const loadGoogle = () => new Promise((resolve, reject) => {
    if (window.google && window.google.maps) return resolve();
    const s = document.createElement('script');
    s.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&v=quarterly&loading=async";
    s.async = true; s.defer = true;
    s.onload = () => resolve();
    s.onerror = (e) => reject(e);
    document.head.appendChild(s);
  });

  const EarthBlock = ({lang}) => {
    const [mode, setMode] = useState('satellite'); // 'satellite' | 'roadmap'
    const [tilt, setTilt] = useState(0); // 0 or 45 where available
    const mapRef = useState(null)[0];
    const [mapEl, setMapEl] = useState(null);

    // init map when element ready
    React.useEffect(()=>{
      let map;
      let canceled = false;
      const init = async () => {
        try {
          await loadGoogle();
          if (canceled || !mapEl) return;
          const center = { lat: 13.7563, lng: 100.5018 }; // Bangkok
          map = new window.google.maps.Map(mapEl, {
            center,
            zoom: 12,
            mapTypeId: mode === 'satellite' ? 'satellite' : 'roadmap',
            tilt,
            heading: 0,
            mapId: undefined // you can set your vector mapId here for advanced styling
          });
          setGmReady(true);
        } catch (e) {
          console.warn('Google Maps load failed', e);
        }
      };
      init();
      return ()=>{ canceled = true; };
    }, [mapEl]);

    // respond to mode/tilt changes
    React.useEffect(()=>{
      if (!gmReady || !mapEl || !window.google || !window.google.maps) return;
      const map = mapEl && mapEl.__mapInstance;
      // store map instance on element if missing
      if (!map) {
        const m = new window.google.maps.Map(mapEl, { center: {lat:13.7563, lng:100.5018}, zoom:12, mapTypeId: mode==='satellite'?'satellite':'roadmap', tilt });
        mapEl.__mapInstance = m;
        return;
      }
      map.setMapTypeId(mode==='satellite'?'satellite':'roadmap');
      // Attempt 45° tilt where available
      try { map.setTilt(tilt); } catch {}
    }, [mode, tilt, gmReady, mapEl]);

    return (
      <div className="bg-white border rounded-2xl p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold">{lang==='th'? 'แผนที่พื้นหลังแบบ Google Earth' : 'Google Earth-style Background'}</h3>
          <div className="flex gap-2">
            <button onClick={()=>setMode('satellite')} className={`px-3 py-1 rounded-lg border ${mode==='satellite'?'bg-emerald-600 text-white':'hover:bg-gray-50'}`}>Satellite</button>
            <button onClick={()=>setMode('roadmap')} className={`px-3 py-1 rounded-lg border ${mode==='roadmap'?'bg-emerald-600 text-white':'hover:bg-gray-50'}`}>Roadmap</button>
            <button onClick={()=>setTilt(t=>t===45?0:45)} className="px-3 py-1 rounded-lg border hover:bg-gray-50">{lang==='th'? (tilt===45?'มุมมอง 2D':'มุมมอง 3D (45°)') : (tilt===45?'2D view':'3D view (45°)')}</button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div ref={setMapEl} className="h-80 rounded-xl border"/>
            {!gmReady && (
              <div className="mt-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded p-2">
                {lang==='th' ? 'ต้องใส่คีย์ Google Maps API ในโค้ด (YOUR_GOOGLE_MAPS_API_KEY) เพื่อใช้งานภาพถ่ายดาวเทียม/3D ตามเงื่อนไขของ Google' : 'Insert your Google Maps API key in code (YOUR_GOOGLE_MAPS_API_KEY) to enable satellite/3D per Google terms.'}
              </div>
            )}
          </div>
          <div className="text-sm text-gray-600">
            <div className="font-medium mb-1">{lang==='th'? 'วิธีใช้งาน' : 'How to use'}</div>
            <ol className="list-decimal ml-5 space-y-1">
              <li>{lang==='th'? 'สมัคร Google Cloud และเปิด Maps JavaScript API' : 'Enable Maps JavaScript API in Google Cloud'}</li>
              <li>{lang==='th'? 'ตั้งค่าบิลลิง + สร้าง API key และจำกัดโดเมน' : 'Set up billing, create API key, restrict to your domain'}</li>
              <li>{lang==='th'? 'แทนที่ค่า YOUR_GOOGLE_MAPS_API_KEY ในโค้ด' : 'Replace YOUR_GOOGLE_MAPS_API_KEY in the code'}</li>
              <li>{lang==='th'? 'เลือก Satellite และกด 3D เพื่อเอียง 45° (เฉพาะพื้นที่ที่รองรับ)' : 'Switch to Satellite and toggle 3D (45°) where available'}</li>
            </ol>
            <div className="mt-3 text-xs text-gray-500">
              {lang==='th'? 'หมายเหตุ: การใช้งาน Google imagery ต้องปฏิบัติตามข้อกำหนดการใช้งานและการคิดค่าบริการของ Google Maps Platform' : 'Note: Use of Google imagery must follow Google Maps Platform terms and billing.'}
            </div>
          </div>
        </div>
      </div>
    );
  };
  const [lang, setLang] = useState("th");
  const t = (k) => k.split(".").reduce((o, i) => (o && o[i] !== undefined ? o[i] : undefined), I18N[lang]) || k;

  // ===== Upload Wizard state & helpers =====
  const [step, setStep] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadErrors, setUploadErrors] = useState([]);
  const [shpCheck, setShpCheck] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [meta, setMeta] = useState({ title: "", desc: "", crs: "", geometry: "", min: "", max: "" });
  const [prjInfo, setPrjInfo] = useState({ found:false, epsg:null, name:null, raw:null, error:null });

  const onFiles = (fileList) => {
    const arr = Array.from(fileList || []);
    setSelectedFiles(arr);
    validateFiles(arr);
    setProgress(0);
    // auto-read .prj to fill CRS if available
    readPrjIfAny(arr);
  };
  const onFileInputChange = (e) => onFiles(e.target.files);

  // --- Parse .prj (WKT) to EPSG/name heuristically (client-side) ---
  const parsePrj = (wkt) => {
    try {
      const raw = wkt;
      const s = wkt.toLowerCase();
      // If AUTHORITY["EPSG","XXXX"] exists -> trust it
      const m = s.match(/authority\s*\[\s*\"epsg\"\s*,\s*\"(\d{3,5})\"\s*\]/);
      if (m) return { epsg: `EPSG:${m[1]}`, name: (wkt.match(/(projcs|geogcs)\s*\[\s*\"([^\"]+)\"/i)||[])[2]||null, raw };
      // Common TH cases
      const nameMatch = (wkt.match(/(projcs|geogcs)\s*\[\s*\"([^\"]+)\"/i)||[])[2]||null;
      const hasWgs = /wgs[_\s]?84/.test(s);
      const hasUtm = /utm/.test(s);
      const zone47 = /zone\s*47n/.test(s) || /47\s*n/.test(s);
      const zone48 = /zone\s*48n/.test(s) || /48\s*n/.test(s);
      const indian = /indian[_\s-]?1975|indian[_\s-]?thailand|indian[_\s-]?1954/.test(s);
      if (hasWgs && hasUtm && zone47) return { epsg: 'EPSG:32647', name: nameMatch||'WGS 84 / UTM zone 47N', raw };
      if (hasWgs && hasUtm && zone48) return { epsg: 'EPSG:32648', name: nameMatch||'WGS 84 / UTM zone 48N', raw };
      if (hasWgs && !hasUtm)        return { epsg: 'EPSG:4326',  name: nameMatch||'WGS 84', raw };
      if (indian && hasUtm && zone47) return { epsg: 'EPSG:24047', name: nameMatch||'Indian 1975 / UTM zone 47N', raw };
      if (indian && hasUtm && zone48) return { epsg: 'EPSG:24048', name: nameMatch||'Indian 1975 / UTM zone 48N', raw };
      return { epsg: null, name: nameMatch, raw };
    } catch (e) {
      return { epsg: null, name: null, raw: wkt, error: String(e) };
    }
  };

  // Find uploaded .prj and populate meta.crs
  const readPrjIfAny = async (files) => {
    try {
      const list = files || selectedFiles;
      if (!list || list.length===0) return;
      const lc = list.map(f=>({name:f.name, file:f, lc:f.name.toLowerCase()}));
      const shp = lc.find(x=>x.lc.endsWith('.shp'));
      let prjCandidate = null;
      if (shp){
        const base = shp.lc.slice(0,-4);
        prjCandidate = lc.find(x=>x.lc===base+'.prj');
      }
      if (!prjCandidate) prjCandidate = lc.find(x=>x.lc.endsWith('.prj'));
      if (!prjCandidate) { setPrjInfo({found:false, epsg:null, name:null, raw:null, error:null}); return; }
      const text = await prjCandidate.file.text();
      const info = parsePrj(text);
      setPrjInfo({found:true, ...info});
      if (info.epsg && !meta.crs) setMeta(m=>({...m, crs: info.epsg}));
    } catch (e) {
      setPrjInfo({found:false, epsg:null, name:null, raw:null, error:String(e)});
    }
  };

  const validateFiles = (files) => {
    const errors = [];
    const lcNames = files.map(f => f.name.trim().toLowerCase());
    const allowed = ["shp","shx","dbf","prj","geojson","json","tif","tiff","gpkg"];
    const bad = lcNames.filter(n => !allowed.includes(n.split(".").pop()))
    if (bad.length) errors.push(`${lang==='th' ? 'ไฟล์ที่ไม่รองรับ' : 'Unsupported files'}: ${bad.join(', ')}`);

    // Shapefile bundle check (require same basename for .shp/.shx/.dbf/.prj)
    const shpFiles = lcNames.filter(n => n.endsWith('.shp'));
    if (shpFiles.length > 1) {
      errors.push(lang==='th' ? 'พบ .shp มากกว่าหนึ่งไฟล์ โปรดอัปโหลดทีละชุด' : 'Multiple .shp found. Upload one set at a time.');
    }
    let info = null;
    if (shpFiles.length === 1) {
      const base = shpFiles[0].slice(0, -4);
      const hasShx = lcNames.includes(base + '.shx');
      const hasDbf = lcNames.includes(base + '.dbf');
      const hasPrj = lcNames.includes(base + '.prj');
      info = { base, hasShp: true, hasShx, hasDbf, hasPrj };
      if (!(hasShx && hasDbf && hasPrj)) {
        errors.push(lang==='th' ? 'ชุด Shapefile ไม่ครบ (.shp/.shx/.dbf/.prj)' : 'Shapefile set incomplete (.shp/.shx/.dbf/.prj required)');
      }
    }
    setShpCheck(info);
    setUploadErrors(errors);
    return errors.length === 0;
  };

  const canStartUpload = selectedFiles.length > 0 && uploadErrors.length === 0 && (!shpCheck || (shpCheck.hasShx && shpCheck.hasDbf && shpCheck.hasPrj));
  const canGoNextFromStep1 = progress === 100;
  const isMetadataValid = meta.title.trim() && meta.crs.trim() && meta.geometry.trim();

  const handleStartUpload = () => {
    if (!canStartUpload || isUploading) return;
    setIsUploading(true);
    setProgress(0);
    const iv = setInterval(() => {
      setProgress(p => {
        const np = p + Math.floor(10 + Math.random() * 20);
        if (np >= 100) {
          clearInterval(iv);
          setIsUploading(false);
          setProgress(100);
        }
        return Math.min(np, 100);
      });
    }, 250);
  };

  const handlePrev = () => setStep(s => Math.max(1, s - 1));
  const handleNext = () => {
    if (step === 1 && canGoNextFromStep1) setStep(2);
    else if (step === 2 && isMetadataValid) setStep(3);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-green-700">{t("brand")}</h1>
          <button onClick={() => setLang(lang === "th" ? "en" : "th")} className="flex items-center gap-2 text-sm px-3 py-1 rounded-lg border hover:bg-gray-50">
            <Globe className="h-4 w-4" /> {lang === "th" ? "TH" : "EN"}
          </button>
        </div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#marketplace" className="hover:text-green-600">{t("nav.marketplace")}</a>
          <a href="#features" className="hover:text-green-600">{t("nav.features")}</a>
          <a href="#flow" className="hover:text-green-600">{t("nav.flow")}</a>
          <a href="#dashboard" className="hover:text-green-600">{t("nav.dashboard")}</a>
          <a href="#knowledge" className="hover:text-green-600">{t("nav.knowledge")}</a>
          <a href="#pricing" className="hover:text-green-600">{t("nav.pricing")}</a>
          <a href="#services" className="hover:text-green-600">{t("nav.services")}</a>
          <a href="#product" className="hover:text-green-600">{t("nav.product")}</a>
          <a href="#seller" className="hover:text-green-600">{t("nav.seller")}</a>
          <a href="#about" className="hover:text-green-600">{t("nav.about")}</a>
          <a href="#contact" className="hover:text-green-600">{t("nav.contact")}</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-r from-green-600 to-teal-500 text-white">
        <h2 className="text-5xl font-bold mb-6">{t("heroTitle")}</h2>
        <p className="text-xl max-w-2xl mx-auto">{t("heroDesc")}</p>
        <div className="mt-8 space-x-4">
          <a href="#marketplace" className="px-6 py-3 inline-block bg-white text-green-700 font-semibold rounded-xl shadow hover:bg-gray-100">{t("ctaStart")}</a>
          <a href="#features" className="px-6 py-3 inline-block border border-white text-white font-semibold rounded-xl hover:bg-green-700">{t("ctaLearn")}</a>
        </div>
      </section>

      {/* Marketplace Section with Search + Filters + Spatial Filter */}
      <section id="marketplace" className="py-16 max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-8">{t("marketplace.title")}</h3>
        <div className="bg-white rounded-2xl shadow p-5 border border-gray-200">
          <div className="grid md:grid-cols-12 gap-3">
            <div className="md:col-span-5 flex items-center gap-2 border rounded-lg px-3 py-2">
              <Search className="h-5 w-5 text-gray-500" />
              <input placeholder={t("marketplace.placeholder")} className="w-full outline-none" />
            </div>
            <select className="md:col-span-2 border rounded-lg px-3 py-2">
              <option>{t("marketplace.province")}</option>
              <option>Bangkok / กรุงเทพมหานคร</option>
              <option>Chiang Mai / เชียงใหม่</option>
              <option>Khon Kaen / ขอนแก่น</option>
              <option>Phuket / ภูเก็ต</option>
            </select>
            <select className="md:col-span-2 border rounded-lg px-3 py-2">
              <option>{t("marketplace.type")}</option>
              <option>Buildings / อาคาร</option>
              <option>Roads / ถนน</option>
              <option>Water / แหล่งน้ำ</option>
              <option>Land use / การใช้ที่ดิน</option>
            </select>
            <select className="md:col-span-2 border rounded-lg px-3 py-2">
              <option>{t("marketplace.price")}</option>
              <option>Free / ฟรี</option>
              <option>{"< ฿1,000"}</option>
              <option>฿1,000–฿5,000</option>
              <option>{"> ฿5,000"}</option>
            </select>
            <button className="md:col-span-1 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">{t("marketplace.search")}</button>
          </div>

          {/* Spatial Filter */}
          <div className="mt-4 grid md:grid-cols-12 gap-3 items-center">
            <div className="md:col-span-2 text-sm text-gray-600 flex items-center gap-2"><Layers className="h-4 w-4"/>{t("marketplace.bbox")}</div>
            <input className="md:col-span-2 border rounded-lg px-3 py-2" placeholder={t("marketplace.minLon")} />
            <input className="md:col-span-2 border rounded-lg px-3 py-2" placeholder={t("marketplace.minLat")} />
            <input className="md:col-span-2 border rounded-lg px-3 py-2" placeholder={t("marketplace.maxLon")} />
            <input className="md:col-span-2 border rounded-lg px-3 py-2" placeholder={t("marketplace.maxLat")} />
            <button className="md:col-span-2 px-4 py-2 rounded-lg border hover:bg-gray-50 flex items-center gap-2"><Ruler className="h-4 w-4"/>{t("marketplace.draw")}</button>
          </div>
          <div className="mt-3 h-40 rounded-xl bg-[url('https://picsum.photos/seed/mapbbox/900/200')] bg-cover bg-center border"></div>

          {/* Results grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {title:"ชั้นข้อมูลอาคาร (BKK 2025)", tags:["อาคาร","Shapefile"], price:"฿2,900"},
              {title:"โครงข่ายถนนระดับท้องถิ่น", tags:["ถนน","GeoJSON"], price:"฿1,200"},
              {title:"ชั้นข้อมูลแหล่งน้ำและคลอง", tags:["น้ำ","Shapefile"], price:"ฟรี"},
              {title:"ผังการใช้ประโยชน์ที่ดิน ร่างปรับปรุง", tags:["ผังเมือง","Raster"], price:"฿4,500"},
              {title:"ขอบเขตชุมชน/หมู่บ้าน", tags:["Boundary","GPKG"], price:"฿900"},
              {title:"DEM ความละเอียดสูง", tags:["Terrain","TIFF"], price:"฿3,700"},
            ].map((item,i)=>(
              <div key={i} className="border rounded-xl p-4 bg-white shadow-sm hover:shadow transition">
                <div className="h-32 w-full rounded-lg bg-[url('https://picsum.photos/seed/gis"+i+"/600/300')] bg-cover bg-center mb-3"></div>
                <div className="font-semibold">{item.title}</div>
                <div className="mt-1 flex gap-2 flex-wrap">
                  {item.tags.map((t,idx)=> (
                    <span key={idx} className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">{t}</span>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="font-bold">{item.price}</div>
                  <div className="flex gap-2">
                    <a href="#product" className="px-3 py-1 text-sm rounded-lg border hover:bg-gray-50">ดูรายละเอียด</a>
                    <button className="px-3 py-1 text-sm rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">{t("addToCart")}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Seller CTA */}
          <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
            <div className="text-sm md:text-base">มีไฟล์ .shp / GeoJSON / Raster อยากฝากขาย? {lang === 'th' ? 'อัปโหลดและกำหนดราคา/สิทธิ์ได้เลย' : 'Upload and set price/permissions now.'}</div>
            <a href="#seller" className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 text-sm">{t("nav.seller")}</a>
          </div>
        </div>
      </section>

      {/* Open Map (OSM – Free & Open, no extra license fees) */}
      <section id="osm" className="py-16 max-w-7xl mx-auto px-6">
        <OSMBlock lang={lang} />
      </section>

      {/* Google Earth-like Map (Satellite/3D) */}
      <section id="earth" className="py-16 max-w-7xl mx-auto px-6">
        <EarthBlock lang={lang} />
      </section>

      {/* Flow Section (icons via Lucide) */}
      <section id="flow" className="py-20 bg-gray-100 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">{t("flowTitle")}</h3>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            {icon: <Users className="h-6 w-6"/>, title: lang==='th'?"สมัครสมาชิก":"Sign up", desc: lang==='th'?"กรอกข้อมูลส่วนตัว ยืนยันอีเมล และเข้าสู่ระบบ":"Fill profile, verify email, sign in", href: "#pricing", cta: t("startFree")},
            {icon: <><Map className="h-6 w-6"/>/<Upload className="h-6 w-6"/></>, title: lang==='th'?"เลือกหรืออัปโหลดไฟล์ GIS":"Browse or upload GIS", desc: lang==='th'?"ซื้อจาก Marketplace หรือฝากขาย ตั้งราคาและสิทธิ์":"Buy from marketplace or upload to sell with pricing & license", href: "#marketplace", cta: "Marketplace"},
            {icon: <CreditCard className="h-6 w-6"/>, title: lang==='th'?"ชำระเงินและออกเอกสาร":"Checkout & docs", desc: lang==='th'?"ชำระออนไลน์/โอน พร้อมใบเสร็จและใบหัก ณ ที่จ่ายอัตโนมัติ":"Pay online/bank; auto receipt & withholding slip", href: "#pricing", cta: lang==='th'?"ดูแพ็กเกจ":"See plans"},
            {icon: <Download className="h-6 w-6"/>, title: lang==='th'?"ดาวน์โหลดและวิเคราะห์":"Download & analyze", desc: lang==='th'?"ดาวน์โหลดและใช้เครื่องมือ FAR/BCR/OSR/เกษตร/ผังเมือง":"Analyze FAR/BCR/OSR, agri & planning tools", href: "#services", cta: t("tryTool")},
            {icon: <GraduationCap className="h-6 w-6"/>, title: lang==='th'?"เรียนรู้ออนไลน์":"Learn online", desc: lang==='th'?"บทความ วิดีโอ คอร์ส/เวิร์กช็อป พร้อมใบรับรอง":"Articles, videos, courses & certificates", href: "#knowledge", cta: lang==='th'?"เข้าศูนย์ความรู้":"Knowledge Hub"},
            {icon: <Compass className="h-6 w-6"/>, title: lang==='th'?"บริการวิเคราะห์":"Analysis service", desc: lang==='th'?"สั่งวิเคราะห์เชิงลึก อสังหาฯ เกษตร ผังเมือง สิ่งแวดล้อม":"Deep-dive analysis by experts", href: "#services", cta: t("requestQuote")},
            {icon: <LifeBuoy className="h-6 w-6"/>, title: lang==='th'?"ติดตามและสนับสนุน":"Support", desc: lang==='th'?"อัปเดตไฟล์ ข่าวสาร Ticket / Live Chat / Forum":"Updates, tickets, live chat, forum", href: "#contact", cta: lang==='th'?"ติดต่อเรา":"Contact"},
            {icon: <Users className="h-6 w-6"/>, title: lang==='th'?"เข้าร่วม Community":"Join community", desc: lang==='th'?"แชร์กรณีศึกษา สร้างเครือข่ายผู้เชี่ยวชาญ GIS":"Share cases & network", href: "#knowledge", cta: lang==='th'?"เข้าชุมชน":"Join"}
          ].map((step,i) => (
            <div key={i} className={`p-6 rounded-xl shadow hover:shadow-lg transition text-center border border-gray-200 ${i % 2 ? 'bg-slate-50' : 'bg-white'}`}>
              <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-emerald-600 text-white flex items-center justify-center">{step.icon}</div>
              <h4 className="font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm min-h-[48px]">{step.desc}</p>
              <a href={step.href} className="inline-block mt-4 px-4 py-2 text-sm rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">{step.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="py-16 max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-8">{t("dashboardTitle")}</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[{label: lang==='th'?"ไฟล์ที่ซื้อ":"Purchased", value: 24}, {label: lang==='th'?"ไฟล์ที่ฝากขาย":"For sale", value: 12}, {label: lang==='th'?"รายได้เดือนนี้":"Revenue (mo)", value: "฿18,400"}, {label: lang==='th'?"คำขอวิเคราะห์":"Analysis requests", value: 5}].map((k,i)=> (
            <div key={i} className="bg-white border rounded-xl p-5 shadow-sm">
              <div className="text-sm text-gray-500">{k.label}</div>
              <div className="text-2xl font-bold mt-1">{k.value}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <div className="font-semibold mb-3">{lang==='th'?"ไฟล์ที่ซื้อล่าสุด":"Recent purchases"}</div>
            <div className="overflow-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-gray-500">
                  <tr><th className="py-2">{lang==='th'?"รายการ":"Item"}</th><th>{lang==='th'?"ประเภท":"Type"}</th><th>{lang==='th'?"ราคา":"Price"}</th><th>{lang==='th'?"สถานะ":"Status"}</th></tr>
                </thead>
                <tbody>
                  {[[lang==='th'?"ขอบเขตชุมชน อัปเดต 2025":"Village boundary 2025","Boundary","฿900",lang==='th'?"ดาวน์โหลดแล้ว":"Downloaded"],[lang==='th'?"ชั้นข้อมูลอาคาร BKK":"BKK Buildings","Shapefile","฿2,900",lang==='th'?"รออัปเดต":"Pending"],[lang==='th'?"คลอง-แหล่งน้ำ":"Canals & water","Shapefile","ฟรี",lang==='th'?"ดาวน์โหลดแล้ว":"Downloaded"]].map((r,i)=> (
                    <tr key={i} className="border-t">
                      <td className="py-2">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-white border rounded-xl p-5 shadow-sm">
            <div className="font-semibold mb-3">{lang==='th'?"ไฟล์ที่ฝากขาย (สรุป)":"On sale (summary)"}</div>
            <div className="overflow-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-gray-500">
                  <tr><th className="py-2">{lang==='th'?"ไฟล์":"File"}</th><th>{lang==='th'?"ราคา":"Price"}</th><th>{lang==='th'?"ขายแล้ว":"Sold"}</th><th>{lang==='th'?"รายได้":"Revenue"}</th></tr>
                </thead>
                <tbody>
                  {[["DEM High-Res 5m","฿3,700", 12, "฿44,400"],[lang==='th'?"ถนนท้องถิ่น V2":"Local roads V2","฿1,200", 25, "฿30,000"],[lang==='th'?"ขอบเขตชุมชน":"Village boundary","฿900", 7, "฿6,300"]].map((r,i)=> (
                    <tr key={i} className="border-t">
                      <td className="py-2">{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Section */}
      <section id="product" className="py-16 max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-8">{t("productTitle")}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-2xl p-5 shadow-sm">
            <div className="h-64 rounded-xl bg-[url('https://picsum.photos/seed/product/900/400')] bg-cover bg-center"/>
            <div className="mt-4 flex gap-2">
              {[1,2,3,4].map(i => <div key={i} className="h-16 w-24 rounded-lg bg-[url('https://picsum.photos/seed/thumb"+i+"/200/100')] bg-cover bg-center"/>) }
            </div>
            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">{t("addToCart")}</button>
              <button className="px-4 py-2 rounded-lg border hover:bg-gray-50">{t("preview")}</button>
            </div>
          </div>
          <div className="bg-white border rounded-2xl p-5 shadow-sm">
            <div className="text-xl font-semibold flex items-center gap-2"><FileText className="h-5 w-5"/>ชั้นข้อมูลอาคาร (BKK 2025)</div>
            <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
              <div className="flex items-center gap-2"><Layers className="h-4 w-4"/>Format: Shapefile (.shp)</div>
              <div className="flex items-center gap-2"><Info className="h-4 w-4"/>Geometry: Polygon</div>
              <div className="flex items-center gap-2"><Map className="h-4 w-4"/>CRS: WGS84 / EPSG:4326</div>
              <div className="flex items-center gap-2"><Ruler className="h-4 w-4"/>Extent: 100.35, 13.55, 100.92, 13.95</div>
              <div className="flex items-center gap-2"><CalendarClock className="h-4 w-4"/>Updated: 2025-07-10</div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4"/>License: Standard (single-seat)</div>
            </div>
            <div className="mt-4 text-sm text-gray-600">Description: Building footprints for Bangkok metropolitan area (2025 update). Cleaned topology and QA/QC.</div>
            <div className="mt-4">
              <div className="font-semibold mb-2">Reviews</div>
              {[{name:"Somchai", rating:5, text: lang==='th'?"ข้อมูลสะอาด ใช้งานง่าย":"Clean data, easy to use"},{name:"Nida", rating:4, text: lang==='th'?"ตรงกับความจริงมาก":"Matches reality"}].map((r,i)=> (
                <div key={i} className="border-t py-2 text-sm">
                  <div className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-500"/><span className="font-medium">{r.name}</span><span className="text-gray-500">({r.rating}/5)</span></div>
                  <div className="text-gray-600">{r.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upload Wizard – 3 Steps (with validation + progress + SHP check) */}
      <section id="seller" className="py-16 max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-8">{t("uploadTitle")}</h3>
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          {/* Step indicators */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            {[1,2,3].map((n,i)=>{
              const active = step===n;
              const done = step>n;
              const base = active?"bg-emerald-600 text-white": done?"bg-emerald-500 text-white":"bg-gray-200 text-gray-700";
              return (
                <div key={n} className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center ${base}`}>{n}</div>
                  <div className="font-semibold">{n===1?"Upload": n===2?"Metadata":"Pricing & License"}</div>
                  {i<2 && <div className="flex-1 h-px bg-gray-200 hidden md:block"></div>}
                </div>
              )
            })}
          </div>

          {/* Step 1: Upload */}
          {step===1 && (
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="md:col-span-2 border rounded-xl p-4">
                <div className="font-medium mb-2">1) {lang==='th'?"อัปโหลดไฟล์":"Upload files"}</div>
                <label onDragOver={(e)=>e.preventDefault()} onDrop={(e)=>{e.preventDefault(); onFiles(e.dataTransfer.files);}} className="h-32 rounded-lg border-2 border-dashed flex flex-col items-center justify-center text-gray-600 cursor-pointer">
                  <FileUp className="h-5 w-5 mb-1"/>
                  <div className="text-sm">Drag & Drop .shp/.shx/.dbf/.prj, .geojson, .tif, .gpkg</div>
                  <input type="file" multiple onChange={onFileInputChange} accept=".shp,.shx,.dbf,.prj,.geojson,.json,.tif,.tiff,.gpkg" className="hidden" />
                </label>
                <div className="mt-3 text-xs text-gray-500">Max 2GB/file. {lang==='th'?"รองรับ SHP/GeoJSON/GPKG/TIFF":"Supports SHP/GeoJSON/GPKG/TIFF"}.</div>

                {/* Selected files */}
                {selectedFiles.length>0 && (
                  <div className="mt-4">
                    <div className="font-medium mb-2">{lang==='th'?"ไฟล์ที่เลือก":"Selected files"} ({selectedFiles.length})</div>
                    <ul className="text-sm text-gray-700 space-y-1 max-h-32 overflow-auto">
                      {selectedFiles.map((f,i)=> (<li key={i} className="flex justify-between"><span>{f.name}</span><span className="text-gray-500">{Math.max(1, Math.round((f.size||0)/1024))} KB</span></li>))}
                    </ul>
                  </div>
                )}

                {/* Validation summary */}
                <div className="mt-4 grid md:grid-cols-3 gap-3">
                  <div className={`flex items-start gap-2 p-3 rounded-lg border ${uploadErrors.length===0? 'border-emerald-200 bg-emerald-50':'border-amber-200 bg-amber-50'}`}>
                    {uploadErrors.length===0? <CheckCircle className="h-5 w-5 text-emerald-600"/> : <AlertTriangle className="h-5 w-5 text-amber-600"/>}
                    <div className="text-sm">
                      <div className="font-medium">{lang==='th'?"ตรวจรูปแบบไฟล์":"File type check"}</div>
                      <div className="text-gray-600">{uploadErrors.length===0? (lang==='th'?"ผ่าน":"OK") : uploadErrors[0]}</div>
                    </div>
                  </div>
                  <div className={`flex items-start gap-2 p-3 rounded-lg border ${(!shpCheck || (shpCheck.hasShx && shpCheck.hasDbf && shpCheck.hasPrj))? 'border-emerald-200 bg-emerald-50':'border-red-200 bg-red-50'}`}>
                    {(!shpCheck || (shpCheck.hasShx && shpCheck.hasDbf && shpCheck.hasPrj))? <CheckCircle className="h-5 w-5 text-emerald-600"/> : <XCircle className="h-5 w-5 text-red-600"/>}
                    <div className="text-sm">
                      <div className="font-medium">Shapefile bundle</div>
                      <div className="text-gray-600">
                        {!shpCheck? (lang==='th'?"ไม่มี .shp ในชุดนี้ (ข้ามได้)":"No .shp in selection (skip)") :
                        (shpCheck.hasShx && shpCheck.hasDbf && shpCheck.hasPrj? (lang==='th'?"ครบ .shp/.shx/.dbf/.prj":"Complete .shp/.shx/.dbf/.prj") : (lang==='th'?"ไม่ครบ – ต้องมี .shx/.dbf/.prj":"Incomplete – need .shx/.dbf/.prj"))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-lg border border-gray-200 bg-gray-50">
                    <Info className="h-5 w-5 text-gray-600"/>
                    <div className="text-sm">
                      <div className="font-medium">Tips</div>
                      <div className="text-gray-600">{lang==='th'?"ใช้ .geojson เมื่อไม่มี .prj หรืออยากอัปไฟล์เดี่ยว":"Use .geojson when you don't have .prj or prefer single file"}</div>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm"><span>{lang==='th'?"ความคืบหน้า":"Progress"}</span><span>{progress}%</span></div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div style={{width: `${progress}%`}} className="h-2 bg-emerald-600 transition-all"></div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button onClick={handleStartUpload} disabled={!canStartUpload || isUploading} className={`px-4 py-2 rounded-lg ${(!canStartUpload || isUploading)?'bg-gray-300 text-gray-600':'bg-emerald-600 text-white hover:bg-emerald-700'}`}>{isUploading? (lang==='th'?"กำลังอัปโหลด...":"Uploading...") : (lang==='th'?"เริ่มอัปโหลด":"Start upload")}</button>
                    <button onClick={()=>{setSelectedFiles([]); setUploadErrors([]); setShpCheck(null); setProgress(0);}} className="px-4 py-2 rounded-lg border">{lang==='th'?"ล้างไฟล์":"Clear"}</button>
                  </div>
                </div>
              </div>
              <div className="border rounded-xl p-4">
                <div className="font-medium mb-2">Preview</div>
                <div className="h-32 rounded-lg bg-[url('https://picsum.photos/seed/preview/600/300')] bg-cover bg-center"></div>
              </div>
            </div>
          )}

          {/* Step 2: Metadata */}
          {step===2 && (
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="border rounded-xl p-4">
                <div className="font-medium mb-2">2) Metadata</div>
                <input value={meta.title} onChange={e=>setMeta({...meta, title:e.target.value})} className={`w-full border rounded-lg px-3 py-2 mb-2 ${!meta.title? 'border-red-300' : ''}`} placeholder="Title / ชื่อไฟล์" />
                <textarea value={meta.desc} onChange={e=>setMeta({...meta, desc:e.target.value})} className="w-full border rounded-lg px-3 py-2 mb-2" placeholder="Description / คำอธิบาย"/>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex gap-2 items-center">
                  <input value={meta.crs} onChange={e=>setMeta({...meta, crs:e.target.value})} className={`flex-1 border rounded-lg px-3 py-2 ${!meta.crs? 'border-red-300' : ''}`} placeholder="CRS (e.g., EPSG:4326)"/>
                  <button type="button" onClick={()=>readPrjIfAny()} className="px-3 py-2 text-sm rounded-lg border hover:bg-gray-50">{lang==='th'?"อ่านจาก .prj":"Read .prj"}</button>
                </div>
                {prjInfo && prjInfo.found && (
                  <div className="mt-1 text-xs text-gray-600">
                    {lang==='th'?"ตรวจพบ .prj":".prj detected"} {prjInfo.name?` – ${prjInfo.name}`:''} {prjInfo.epsg?`→ ${prjInfo.epsg}`: (lang==='th'?"(ไม่พบ EPSG อัตโนมัติ)":"(EPSG not auto-detected)")}
                  </div>
                )}
                {prjInfo && prjInfo.error && <div className="mt-1 text-xs text-red-600">{prjInfo.error}</div>
                  <select value={meta.geometry} onChange={e=>setMeta({...meta, geometry:e.target.value})} className={`border rounded-lg px-3 py-2 ${!meta.geometry? 'border-red-300' : ''}`}>
                    <option value="">Geometry</option>
                    <option>Point</option>
                    <option>Line</option>
                    <option>Polygon</option>
                  </select>
                  <input value={meta.min} onChange={e=>setMeta({...meta, min:e.target.value})} className="border rounded-lg px-3 py-2" placeholder="MinLon, MinLat"/>
                  <input value={meta.max} onChange={e=>setMeta({...meta, max:e.target.value})} className="border rounded-lg px-3 py-2" placeholder="MaxLon, MaxLat"/>
                </div>
                {!isMetadataValid && <div className="mt-2 text-xs text-red-600">{lang==='th'?"กรุณากรอก Title, CRS และ Geometry ให้ครบ":"Please fill Title, CRS and Geometry"}</div>}
              </div>
              <div className="border rounded-xl p-4 md:col-span-2">
                <div className="font-medium mb-2">Sample fields</div>
                <div className="h-40 rounded-lg border p-3 text-xs text-gray-600 overflow-auto">id, name, type, height, updated_at...</div>
              </div>
            </div>
          )}

          {/* Step 3: Pricing & License */}
          {step===3 && (
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="border rounded-xl p-4">
                <div className="font-medium mb-2">3) Pricing & License</div>
                <input className="w-full border rounded-lg px-3 py-2 mb-2" placeholder="Price (THB)" />
                <select className="w-full border rounded-lg px-3 py-2 mb-2"><option>License</option><option>Standard (single-seat)</option><option>Extended (multi-seat)</option><option>Enterprise</option></select>
                <textarea className="w-full border rounded-lg px-3 py-2" placeholder="Terms / เงื่อนไขการใช้"/>
              </div>
              <div className="border rounded-xl p-4 md:col-span-2">
                <div className="font-medium mb-2">FAQs</div>
                <ul className="text-sm text-gray-600 list-disc ml-5 space-y-1">
                  <li>ข้อมูลต้องไม่มีสิทธิ์ของบุคคลที่สามโดยไม่ได้รับอนุญาต</li>
                  <li>ห้ามเปิดเผยข้อมูลส่วนบุคคล/ข้อมูลอ่อนไหว</li>
                  <li>ผู้ขายรับผิดชอบความถูกต้องของ metadata</li>
                </ul>
              </div>
            </div>
          )}

          {/* Wizard Controls */}
          <div className="mt-6 flex justify-end gap-2">
            <button onClick={handlePrev} disabled={step===1} className={`px-4 py-2 rounded-lg border ${step===1? 'opacity-50 cursor-not-allowed':''}`}>{t("prev")}</button>
            <button onClick={handleNext} disabled={(step===1 && !canGoNextFromStep1) || (step===2 && !isMetadataValid) || step===3} className={`px-4 py-2 rounded-lg ${((step===1 && !canGoNextFromStep1) || (step===2 && !isMetadataValid) || step===3)?'bg-gray-300 text-gray-600':'bg-emerald-600 text-white hover:bg-emerald-700'}`}>{t("next")}</button>
            <button disabled={step!==3} className={`px-4 py-2 rounded-lg ${step!==3? 'bg-gray-300 text-gray-600':'bg-gray-900 text-white'}`}>{t("save")}</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">{t("featuresTitle")}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[{title: "Marketplace GIS", desc: lang==='th'?"ซื้อ-ขายไฟล์ได้อย่างปลอดภัย พร้อมจัดเก็บไฟล์มาตรฐาน":"Secure marketplace with standard storage"},{title: "วิเคราะห์เชิงลึก / Advanced analysis", desc: lang==='th'?"เครื่องมือวิเคราะห์อสังหาฯ เกษตร ผังเมือง และทรัพยากร":"Real-estate, agri, planning & resources"},{title: "Knowledge Hub", desc: lang==='th'?"บทความ วิดีโอ คอร์สออนไลน์ และ Community":"Articles, videos, courses & community"},{title: "สอนออนไลน์ / Live training", desc: lang==='th'?"คอร์ส, สอนสด, Workshop พร้อมใบรับรอง":"Courses, live, workshops, certificates"}].map((f,i) => (
            <div key={i} className="border-2 border-dashed border-gray-300 p-8 rounded-xl text-center">
              <div className="h-16 w-16 mx-auto mb-4 bg-green-200 rounded-full"></div>
              <h4 className="text-lg font-semibold mb-2">{f.title}</h4>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Knowledge Section */}
      <section id="knowledge" className="py-20 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">{t("knowledgeTitle")}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[{title: lang==='th'?"บทความ & Blog":"Articles & Blog", desc: lang==='th'?"กรณีศึกษาและเทคนิคการใช้ GIS":"Case studies & tips"},{title: lang==='th'?"วิดีโอสอน":"Video tutorials", desc: lang==='th'?"วิธีใช้เครื่องมือ วิเคราะห์ และตัวอย่างจริง":"Tools, analysis & real cases"},{title: lang==='th'?"คอร์สออนไลน์ & เวิร์กช็อป":"Online courses & workshops", desc: lang==='th'?"คอร์สสด/บันทึก พร้อมใบรับรอง":"Live/recorded with certificates"},{title: lang==='th'?"อบรมสดออนไลน์":"Live training", desc: lang==='th'?"สอนสด + Q&A กับผู้เชี่ยวชาญ":"Live + Q&A with experts"}].map((k,i) => (
            <div key={i} className="border-2 border-dashed border-gray-300 p-8 rounded-xl text-center">
              <h4 className="text-lg font-semibold mb-2">{k.title}</h4>
              <p className="text-gray-500">{k.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">{t("pricingTitle")}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[{plan: "Basic", desc: lang==='th'?"เข้าถึงไฟล์ฟรีและทดลองใช้งาน":"Access free files & trial", cta: lang==='th'?"สมัครใช้งาน":"Sign up", href: "#contact"},{plan: "Pro", desc: lang==='th'?"ซื้อ-ขายไม่จำกัด + เครื่องมือวิเคราะห์ + คอร์ส + Community":"Unlimited buy/sell + tools + courses + community", cta: lang==='th'?"เริ่ม Pro":"Go Pro", href: "#contact"},{plan: "Enterprise", desc: lang==='th'?"API + ผู้ใช้หลายระดับ + วิเคราะห์เชิงลึก + Training":"API + multi-user + deep analysis + training", cta: lang==='th'?"ติดต่อฝ่ายขาย":"Contact sales", href: "#contact"}].map((p,i) => (
            <div key={i} className="border-2 border-dashed border-gray-300 p-8 rounded-xl text-center bg-white">
              <h4 className="text-xl font-bold mb-2">{p.plan}</h4>
              <div className="h-8 w-20 mx-auto mb-4 bg-green-200 rounded"></div>
              <p className="text-gray-500 min-h-[60px]">{p.desc}</p>
              <a href={p.href} className="inline-block mt-4 px-5 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 text-sm">{p.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">{t("servicesTitle")}</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[{title: lang==='th'?"อสังหาริมทรัพย์":"Real estate", desc: lang==='th'?"วิเคราะห์ที่ดิน ศักยภาพ และรายงานลงทุน":"Land potential & investment reports"},{title: lang==='th'?"การเกษตร":"Agriculture", desc: lang==='th'?"วิเคราะห์พื้นที่เกษตรกรรม ความเหมาะสม และความยั่งยืน":"Suitability & sustainability"},{title: lang==='th'?"ผังเมืองและสิ่งแวดล้อม":"Urban & Environment", desc: lang==='th'?"วิเคราะห์ผังเมืองและผลกระทบสิ่งแวดล้อมเชิงลึก":"Planning & EIA"}].map((s,i) => (
            <div key={i} className="border-2 border-dashed border-gray-300 p-8 rounded-xl text-center bg-white">
              <h4 className="font-semibold mb-2">{s.title}</h4>
              <p className="text-gray-500 min-h-[48px]">{s.desc}</p>
              <a href="#contact" className="inline-block mt-4 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 text-sm">{t("requestQuote")}</a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">{t("aboutTitle")}</h3>
        <p className="text-lg text-center max-w-3xl mx-auto text-gray-600">{t("aboutBody")}</p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-green-600 text-white py-20 text-center">
        <h3 className="text-3xl font-bold mb-6">{t("contactTitle")}</h3>
        <p className="text-lg">{t("contactEmail")}: support@geolandhub.com</p>
        <p className="text-lg">{t("contactPhone")}: 080-000-0000</p>
      </section>

      {/* Legal: Privacy & Terms Templates */}
      <section id="legal" className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">{t("privacy")}</h4>
            <ol className="list-decimal ml-5 space-y-2 text-sm text-gray-700">
              <li>{lang==='th'?"เราเก็บข้อมูลบัญชีเพื่อการให้บริการ (อีเมล, ชื่อ, เลขประจำตัวผู้เสียภาษีเมื่อจำเป็น)":"We collect account data to provide services (email, name, tax ID when needed)."}</li>
              <li>{lang==='th'?"ข้อมูลการชำระเงินดำเนินการโดยผู้ให้บริการชำระเงินที่ได้รับอนุญาต ไม่เก็บข้อมูลบัตรบนระบบเรา":"Payments are processed by authorized providers; we don't store card data."}</li>
              <li>{lang==='th'?"ไฟล์ที่อัปโหลดจะถูกสแกนมัลแวร์และเก็บแบบเข้ารหัส":"Uploaded files are malware-scanned and stored encrypted."}</li>
              <li>{lang==='th'?"สิทธิผู้ใช้: ขอสำเนาข้อมูล, ลบข้อมูล, คัดค้านการประมวลผล":"Your rights: access, deletion, objection."}</li>
            </ol>
          </div>
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h4 className="text-xl font-semibold mb-3">{t("terms")}</h4>
            <ol className="list-decimal ml-5 space-y-2 text-sm text-gray-700">
              <li>{lang==='th'?"ผู้ขายรับรองสิทธิ์ในข้อมูลและความถูกต้องตามกฎหมาย":"Sellers warrant rights and legal compliance of data."}</li>
              <li>{lang==='th'?"ห้ามจำหน่ายข้อมูลที่ละเมิดลิขสิทธิ์/ข้อมูลส่วนบุคคล":"No copyrighted/personal data without permission."}</li>
              <li>{lang==='th'?"ผู้ซื้อได้รับสิทธิ์ตามประเภทใบอนุญาตที่ระบุ":"Buyers get rights per selected license."}</li>
              <li>{lang==='th'?"มีสิทธิ์ระงับ/ลบไฟล์ที่ฝ่าฝืนทันที":"We may suspend/remove infringing files immediately."}</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-white font-bold text-lg mb-3">{t("brand")}</div>
            <p className="text-sm text-gray-400">{lang==='th'?"ศูนย์กลางข้อมูล GIS สำหรับซื้อ-ขาย วิเคราะห์ และการเรียนรู้อย่างยั่งยืน":"The one-stop hub for GIS data, analysis and learning."}</p>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">{t("footerAbout")}</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white">{t("aboutTitle")}</a></li>
              <li><a href="#knowledge" className="hover:text-white">{t("knowledgeTitle")}</a></li>
              <li><a href="#services" className="hover:text-white">{t("servicesTitle")}</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">{t("footerLaw")}</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#legal" className="hover:text-white">{t("privacy")}</a></li>
              <li><a href="#legal" className="hover:text-white">{t("terms")}</a></li>
              <li><a href="#legal" className="hover:text-white">{t("cookie")}</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-3">{t("footerContact")}</div>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>Email: support@geolandhub.com</li>
              <li>{lang==='th'?"โทร":"Phone"}: 062-958-6665</li>
              <li className="mt-2 flex gap-3 text-gray-400">
                <a href="#" aria-label="Facebook" className="hover:text-white">Facebook</a>
                <a href="#" aria-label="YouTube" className="hover:text-white">YouTube</a>
                <a href="#" aria-label="X" className="hover:text-white">X</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-8">© {new Date().getFullYear()} {t("brand")} — All rights reserved.</div>
      </footer>
    </div>
  )
}
