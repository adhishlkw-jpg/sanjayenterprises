export type Product = {
  id: string;
  name: string;
  manufacturer: "Hi-Care Plastics" | "Hope Meditek" | "Surginova";
  category: "IVF" | "IUI" | "ART" | "Gynaecology" | "Surgical";
  image: string;
  description: string;
  details: string[];
  source: string;
};

export const products: Product[] = [
  {
    id: "hicare-mask",
    name: "Surgical Face Mask",
    manufacturer: "Hi-Care Plastics",
    category: "Surgical",
    image: "https://www.hicareindia.com/wp-content/uploads/2022/09/SGPL9944-1.jpg",
    description: "Medical consumable mask range for clinical protection and daily healthcare workflows.",
    details: ["PPE and infection-control product line", "Suitable for hospitals, clinics and laboratories", "From Hi-Care Remedy medical consumables portfolio"],
    source: "https://www.hicareindia.com/"
  },
  {
    id: "hicare-ppe",
    name: "PPE Kit",
    manufacturer: "Hi-Care Plastics",
    category: "Surgical",
    image: "https://www.hicareindia.com/wp-content/uploads/2024/04/LOGO-2.png",
    description: "Protective kit selection for healthcare teams requiring reliable disposable barriers.",
    details: ["PPE consumable category", "Designed for clinical safety programs", "Distributed for hospital procurement"],
    source: "https://www.hicareindia.com/"
  },
  {
    id: "hope-iui-makler",
    name: "IUI Cannula (Makler Type)",
    manufacturer: "Hope Meditek",
    category: "IUI",
    image: "https://www.hopemeditek.com/images/resource/CENTRIFUGE%20TUBE%2010%20%26%2014%20ml.%20%28Conical%29%20%286%29.jpg",
    description: "Atraumatic universal IUI cannula with both-side holes for assisted insemination procedures.",
    details: ["Ref. No. 101205", "Hospital application", "Natural white plastic device", "Made in India"],
    source: "https://www.hopemeditek.com/IUI-Cannula-and-Disposable.html"
  },
  {
    id: "hope-iui-soft-tip",
    name: "IUI Cannula (Soft Open Tip)",
    manufacturer: "Hope Meditek",
    category: "IUI",
    image: "https://www.hopemeditek.com/images/resource/IUI%20CANNULA%20%28Soft%20Open%20Tip%29.jpg",
    description: "Soft open-tip IUI cannula designed for fertility clinics and ART programs.",
    details: ["Double configuration", "Ref. No. 101212", "Atraumatic fertility device"],
    source: "https://www.hopemeditek.com/IUI-Cannula-and-Disposable.html"
  },
  {
    id: "hope-enhance",
    name: "Enhance Wash Medium",
    manufacturer: "Hope Meditek",
    category: "IVF",
    image: "https://www.hopemeditek.com/images/resource/Enhance.jpg",
    description: "Tissue-culture grade semen wash medium for reproductive healthcare and lab applications.",
    details: ["5 ml vial", "Contains HEPES, HSA, Gentamicin and Phenol Red", "For semen preparation workflows"],
    source: "https://www.hopemeditek.com/wash-medium.html"
  },
  {
    id: "hope-den",
    name: "Den-I Gradient System",
    manufacturer: "Hope Meditek",
    category: "ART",
    image: "https://www.hopemeditek.com/images/resource/Den1.jpg",
    description: "Single-layer gradient system screen for semen preparation in reproductive laboratories.",
    details: ["Silane-coated colloidal silica", "HEPES buffered isotonic salt", "Consistent ART lab performance"],
    source: "https://www.hopemeditek.com/wash-medium.html"
  },
  {
    id: "hope-ebc",
    name: "Endometrial Biopsy Curette",
    manufacturer: "Hope Meditek",
    category: "Gynaecology",
    image: "https://www.hopemeditek.com/images/resource/Endometrial.jpg",
    description: "Endometrial tissue collection curette with smooth distal tip and steady vacuum.",
    details: ["Model EBC 1", "Tissue collection through side holes", "Minimal patient discomfort", "Plastic medical device"],
    source: "https://www.hopemeditek.com/Endometrial-Biopsy-Curette.html"
  },
  {
    id: "hope-transfer-pipet",
    name: "3 ML Transfer Pipet",
    manufacturer: "Hope Meditek",
    category: "IVF",
    image: "https://www.hopemeditek.com/images/resource/3ml%20transfer%20pipette.png",
    description: "ART disposable transfer pipet with 1 ml and 2 ml graduations.",
    details: ["Ref. No. 101203", "Pancy range IVF disposable", "Lab workflow consumable"],
    source: "https://www.hopemeditek.com/Pancy-Range-for-IVF-Disposable.html"
  },
  {
    id: "hope-petridish",
    name: "35 MM Petridish",
    manufacturer: "Hope Meditek",
    category: "IVF",
    image: "https://www.hopemeditek.com/images/resource/35%20mm%20petridish.jpg",
    description: "IVF lab disposable dish for assisted reproduction laboratory workflows.",
    details: ["Part of Pancy IVF disposable range", "Also available in 60 mm and centre-well formats", "Sterile lab consumable"],
    source: "https://www.hopemeditek.com/Pancy-Range-for-IVF-Disposable.html"
  },
  {
    id: "surginova-iui-catheter",
    name: "IUI Catheter",
    manufacturer: "Surginova",
    category: "IUI",
    image: "https://surginova.in/images/surginova-header-logo.png",
    description: "High-quality medical device for infertility specialists and gynaecology practices.",
    details: ["Surginova fertility product line", "Used by infertility specialists", "Available through domestic distribution"],
    source: "https://surginova.in/"
  },
  {
    id: "surginova-hsg",
    name: "HSG Device",
    manufacturer: "Surginova",
    category: "Gynaecology",
    image: "https://surginova.in/images/hero-bg3.jpg",
    description: "Gynaecology device from Surginova's portfolio of surgical and medical products.",
    details: ["For gynaecologists and infertility specialists", "ISO 9001:2015 company portfolio", "Surgical medical device category"],
    source: "https://surginova.in/"
  },
  {
    id: "surginova-curette",
    name: "Endometrial Biopsy Curette",
    manufacturer: "Surginova",
    category: "Gynaecology",
    image: "https://surginova.in/images/about-surginova-img.jpg",
    description: "Gynaecology product for tissue sampling workflows in clinical practice.",
    details: ["Doctor-informed product development", "Domestic and international market supply", "Part of Surginova gynaecology range"],
    source: "https://surginova.in/"
  },
  {
    id: "surginova-probe-cover",
    name: "Sterile Vaginal Probe Covers",
    manufacturer: "Surginova",
    category: "Surgical",
    image: "https://surginova.in/images/quality-products-icon.png",
    description: "Sterile probe cover range for gynaecology and diagnostic procedures.",
    details: ["Available in sterile and unsterile variants", "Hospital utility product", "Supports diagnostic procedure hygiene"],
    source: "https://surginova.in/"
  }
];

export const filters = ["All", "IVF", "IUI", "ART", "Gynaecology", "Surgical"] as const;
