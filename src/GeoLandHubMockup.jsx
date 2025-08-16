// src/GeoLandHubMockup.jsx
import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import shp from "shpjs";

// ⚠️ รวมไอคอนให้ครั้งเดียวพอ (ลบ import ซ้ำ/ชน)
import {
  Search, Map as MapIcon, Upload, CreditCard, Download, GraduationCap, Compass, LifeBuoy, Users, Globe, FileText, Shield, Star, Layers, Ruler, CalendarClock, Info, CheckCircle, XCircle, AlertTriangle, FileUp
} from "lucide-react";

// ===== I18N (คงของเดิม) =====
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

// ===== คอมโพเนนต์แผนที่เดียว (OSM + อัปโหลด SHP/ZIP) =====
function MapOneWindow({ lang = "th" }) {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [base, setBase] = useState("osm"); // 'osm' | 'sat'
  const [marker, setMarker] = useState(null);
  const [latlng, setLatlng] = useState(null);
  const [layers, setLayers] = useState([]);

  // สร้างแผนที่ครั้งเดียว
  useEffect(() => {
    if (map) return;
    const m = L.map("map-one", { center: [13.7563, 100.5018], zoom: 7 });
    mapRef.current = m;
    setMap(m);

    // คลิกเพื่อวางหมุด + แสดงพิกัด
    m.on("click", (e) => {
      const { lat, lng } = e.latlng;
      setLatlng({ lat, lng });
      if (marker) marker.setLatLng(e.latlng);
      else setMarker(L.marker(e.latlng).addTo(m));
    });

    return () => m.remove();
  }, [map, marker]);

  // ใส่ฐานแผนที่ตาม state
  useEffect(() => {
    if (!map) return;
    if (map.__base) map.removeLayer(map.__base);

    if (base === "osm") {
      map.__base = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19, attribution: "© OpenStreetMap contributors",
      }).addTo(map);
    } else {
      map.__base = L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        { maxZoom: 20, attribution: "Tiles © Esri & contributors" }
      ).addTo(map);
    }
  }, [map, base]);

  // อัปโหลด .shp/.zip → แสดงเป็น GeoJSON
  const handleFile = async (file) => {
    if (!map || !file) return;
    try {
      const buf = await file.arrayBuffer();
      const geojson = await shp(buf);
      const gj = Array.isArray(geojson)
        ? { type: "FeatureCollection", features: geojson.flatMap(d => d.features || []) }
        : geojson;

      const layer = L.geoJSON(gj, {
        style: { color: "#0ea5e9", weight: 2, fillOpacity: 0.1 },
        onEachFeature: (f, lyr) => {
          if (f.properties) {
            lyr.bindPopup(
              `<pre style="margin:0;padding:6px 8px;max-width:260px;white-space:pre-wrap;">${JSON.stringify(
                f.properties, null, 2
              )}</pre>`
            );
          }
        },
      }).addTo(map);
      setLayers(prev => [...prev, layer]);
      try { map.fitBounds(layer.getBounds(), { padding: [20, 20] }); } catch {}
    } catch (e) {
      alert((lang === "th" ? "อ่าน Shapefile (.zip) ไม่สำเร็จ: " : "Failed to read Shapefile (.zip): ") + (e?.message || e));
      console.error(e);
    }
  };

  const clearLayers = () => {
    layers.forEach(lyr => map && map.removeLayer(lyr));
    setLayers([]);
  };

  const copyLatLng = async () => {
    if (!latlng) return;
    const t = `${latlng.lat.toFixed(6)}, ${latlng.lng.toFixed(6)}`;
    try {
      await navigator.clipboard.writeText(t);
      alert((lang === "th" ? "คัดลอกพิกัด: " : "Copied: ") + t);
    } catch {
      window.prompt("Copy:", t);
    }
  };

  return (
    <section id="osm" className="py-16 max-w-7xl mx-auto px-6">
      <div className="fixed top-3 left-1/2 -translate-x-1/2 z-[1000]">
        <div className="backdrop-blur bg-white/80 shadow-md rounded-2xl px-4 py-2 flex items-center gap-2 border border-slate-200">
          <span className="font-semibold text-slate-700">Map</span>

          <div className="h-5 w-px bg-slate-300 mx-1" />

          <button
            className={`px-3 py-1 rounded-full text-sm border ${base === "osm" ? "bg-slate-900 text-white" : "bg-white text-slate-700"}`}
            onClick={() => setBase("osm")}
          >
            OSM
          </button>
          <button
            className={`px-3 py-1 rounded-full text-sm border ${base === "sat" ? "bg-slate-900 text-white" : "bg-white text-slate-700"}`}
            onClick={() => setBase("sat")}
          >
            Satellite
          </button>

          <div className="h-5 w-px bg-slate-300 mx-1" />

          <label className="px-3 py-1 rounded-full text-sm border bg-white text-slate-700 cursor-pointer">
            Upload .shp/.zip
            <input
              type="file"
              accept=".zip,.shp"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
          </label>
          <button
            className="px-3 py-1 rounded-full text-sm border bg-white text-rose-600"
            onClick={clearLayers}
          >
            Clear layers
          </button>

          <div className="h-5 w-px bg-slate-300 mx-1" />

          <div className="text-sm text-slate-700">
            {latlng ? (
              <>
                <span className="font-medium">Lat/Lng:</span>{" "}
                {latlng.lat.toFixed(6)}, {latlng.lng.toFixed(6)}
                <button
                  className="ml-2 px-2 py-0.5 border rounded-full text-xs bg-white"
                  onClick={copyLatLng}
                >
                  Copy
                </button>
              </>
            ) : (
              <span className="text-slate-400">คลิกบนแผนที่เพื่อเอาพิกัด</span>
            )}
          </div>
        </div>
      </div>

      <div id="map-one" className="h-[80vh] w-full rounded-xl border shadow-sm" />
      <div className="mt-2 text-xs text-gray-600">
        {lang === 'th' ? 'เครดิตแผนที่: © ผู้ร่วมสมทบ OpenStreetMap' : 'Map credits: © OpenStreetMap contributors'}
      </div>
    </section>
  );
}

export default function GeoLandHubMockup() {
  // โหลด Leaflet CSS ครั้งเดียว (กันบางกรณีที่ index.html ไม่มี)
  useEffect(() => {
    if (document.getElementById("leaflet-css")) return;
    const l = document.createElement("link");
    l.id = "leaflet-css";
    l.rel = "stylesheet";
    l.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(l);
  }, []);

  const [lang, setLang] = useState("th");
  const t = (k) => k.split(".").reduce((o, i) => (o && o[i] !== undefined ? o[i] : undefined), I18N[lang]) || k;

  // ===== จากตรงนี้ลงไป “คงโครงเดิม” ของคุณไว้ =====
  // Header, Hero, Marketplace, Flow, Dashboard, Product, Seller Wizard, Features, Knowledge, Pricing, Services, About, Contact, Legal, Footer …
  // (ผมตัดเฉพาะ Google/Earth ทั้งบล็อก และแก้ import/ชน/ซ้ำให้เรียบร้อยแล้ว)

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

      {/* Hero */}
      <section className="text-center py-24 bg-gradient-to-r from-green-600 to-teal-500 text-white">
        <h2 className="text-5xl font-bold mb-6">{t("heroTitle")}</h2>
        <p className="text-xl max-w-2xl mx-auto">{t("heroDesc")}</p>
        <div className="mt-8 space-x-4">
          <a href="#marketplace" className="px-6 py-3 inline-block bg-white text-green-700 font-semibold rounded-xl shadow hover:bg-gray-100">{t("ctaStart")}</a>
          <a href="#features" className="px-6 py-3 inline-block border border-white text-white font-semibold rounded-xl hover:bg-green-700">{t("ctaLearn")}</a>
        </div>
      </section>

      {/* Marketplace (เดิม) */}
      {/* … >>> คงบล็อก Marketplace/Flow/Dashboard/… ของเดิมคุณตามที่เคยวาง <<< … */}
      {/* เพื่อไม่ยาว ผมขอให้คุณวาง “ส่วนเดิมทั้งหมด” ต่อจากนี้ได้เลย (ไม่ต้องแก้ในส่วนพวกนั้น) */}

      {/* ✅ แผนที่แบบหน้าต่างเดียวแทน OSM/Earth เดิม */}
      <MapOneWindow lang={lang} />

      {/* ที่เหลือ (Flow/Dashboard/Product/Seller/Features/Knowledge/Pricing/Services/About/Contact/Legal/Footer) ให้คงตามเดิมของคุณ */}
      {/* … วางโค้ดเดิมของคุณต่อได้เลย … */}
    </div>
  );
}
