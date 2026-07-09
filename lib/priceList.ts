export type PriceListItem = {
  name: string;
  pack: string;
  rate: string;
  gst: string;
  hsn: string;
};

export type PriceListGroup = {
  supplier: string;
  location: string;
  items: PriceListItem[];
};

export const priceListNote =
  "A Post Mastectomy kit restoring confidence, dignity and femininity for Breast Cancer Survivors. Contains a light weight silicon breast prosthesis and all accessories (prosthesis covers & pocketed bras), available in 2 shapes (Triangular / Oval) and 10 sizes per shape from T-1 (32-34) to T-10 (44-46).";

export const priceList: PriceListGroup[] = [
  {
    supplier: "Hicare Remedy Pvt. Ltd.",
    location: "Kolkata",
    items: [
      { name: "Hand Care (St) Gloves L/M/S", pack: "50 Pair", rate: "415.00", gst: "18%", hsn: "39262011" },
      { name: "Hand Care (St) Band Gloves M/S", pack: "50 Pair", rate: "450.00", gst: "18%", hsn: "39262011" },
      { name: "Hand Care (Non St) Gloves M/S", pack: "100 Pcs.", rate: "315.00", gst: "18%", hsn: "39262011" },
      { name: "Clear Probe Cover", pack: "30 Pcs.", rate: "250.00", gst: "18%", hsn: "39262011" },
      { name: "Laparoscopic Camera Cover 100x8.5\"", pack: "10 Pcs.", rate: "300.00", gst: "18%", hsn: "39262011" },
      { name: "Drape Sheet 40\"x48\"", pack: "10 Pcs.", rate: "315.00", gst: "18%", hsn: "39269039" },
      { name: "Wear on Apron (Large)", pack: "12 Pcs.", rate: "290.00", gst: "18%", hsn: "39262029" },
      { name: "Clean Sheet Gyne/Plain 28\"x54\"", pack: "12 Pcs.", rate: "310.00", gst: "18%", hsn: "39269039" }
    ]
  },
  {
    supplier: "Hitech Solution",
    location: "Delhi",
    items: [
      { name: "Wash Media 5 ml", pack: "1's", rate: "150.00", gst: "18%", hsn: "38210000" },
      { name: "Den II Media [Wash+45%+90%]", pack: "1 Set", rate: "450.00", gst: "18%", hsn: "38210000" }
    ]
  },
  {
    supplier: "Krisco",
    location: "",
    items: [
      { name: "Speculum S/M/L", pack: "1's", rate: "70.00", gst: "12%", hsn: "90189099" },
      { name: "Endo Med with Syringe", pack: "1's", rate: "250.00", gst: "12%", hsn: "90189099" },
      { name: "KIWI Cup", pack: "1's", rate: "3900.00", gst: "12%", hsn: "90189099" },
      { name: "Cytobrush", pack: "1's", rate: "28.00", gst: "12%", hsn: "90183990" }
    ]
  },
  {
    supplier: "Hope Meditek",
    location: "Delhi",
    items: [
      { name: "Cyto Brush 2 Pcs.", pack: "Each", rate: "13.00", gst: "12%", hsn: "9018" },
      { name: "Cyto Brush 3 Pcs.", pack: "Each", rate: "17.00", gst: "12%", hsn: "9018" },
      { name: "Cyto Brush 4 Pcs.", pack: "Each", rate: "23.00", gst: "12%", hsn: "90183910" },
      { name: "IUI Cannula 17cm", pack: "Each", rate: "55.00", gst: "12%", hsn: "90183910" },
      { name: "IUI Cannula Small", pack: "Each", rate: "45.00", gst: "12%", hsn: "90183910" },
      { name: "Conical Tube 15ml", pack: "Each", rate: "11.00", gst: "18%", hsn: "39239099" },
      { name: "Pasteur Pipette 3 ml", pack: "Each", rate: "07.00", gst: "18%", hsn: "39239099" }
    ]
  },
  {
    supplier: "Life Line Surgichem",
    location: "Ahmedabad",
    items: [
      { name: "Non Woven Apron", pack: "Each", rate: "20.00", gst: "5%", hsn: "62101000" },
      { name: "Face Mask (Elastic) Bulk 3 Ply", pack: "Each", rate: "2.00", gst: "5%", hsn: "63079090" },
      { name: "Face Mask (Elastic) Ind 3 Ply", pack: "Each", rate: "2.50", gst: "5%", hsn: "63079090" },
      { name: "Bouffant Cap", pack: "Each", rate: "2.00", gst: "5%", hsn: "62101000" },
      { name: "Shoe Cover Non Woven", pack: "Pair", rate: "5.00", gst: "5%", hsn: "62101000" },
      { name: "Surgeon's Gown (SG-301)", pack: "Each", rate: "130.00", gst: "5%", hsn: "62101000" }
    ]
  },
  {
    supplier: "Miscellaneous",
    location: "",
    items: [
      { name: "UNST Plastic Apron", pack: "100's", rate: "1300.00", gst: "18%", hsn: "39249090" },
      { name: "Conical Tube 14ml (BD)", pack: "50/Pkt", rate: "1100.00", gst: "18%", hsn: "39269090" },
      { name: "Tarson's Sample Container 50ml", pack: "1's", rate: "14.00", gst: "18%", hsn: "39233090" },
      { name: "Tarson's Sample Container 100ml", pack: "1's", rate: "17.00", gst: "18%", hsn: "39233090" },
      { name: "Tarson's Cryovial 1.8ml", pack: "25's", rate: "300.00", gst: "18%", hsn: "39233090" },
      { name: "Acon HCG Pregnancy Rapid Test", pack: "50 Pcs.", rate: "800.00", gst: "5%", hsn: "30029030" },
      { name: "Powder Free Gloves (Nulife)", pack: "50 Pcs.", rate: "30.00", gst: "12%", hsn: "40151200" },
      { name: "Felcon PPD Syringe (100's) 1ml", pack: "1 Box", rate: "1200.00", gst: "12%", hsn: "9018" },
      { name: "Under Pad 60x90cm (10's)", pack: "Pkt.", rate: "250.00", gst: "12%", hsn: "48189000" }
    ]
  },
  {
    supplier: "R.S. Associates",
    location: "Mumbai",
    items: [
      { name: "Sterile Convex Probe Cover", pack: "100's", rate: "1100.00", gst: "18%", hsn: "40149090" },
      { name: "Un St Latex Probe Cover", pack: "100's", rate: "600.00", gst: "18%", hsn: "40149090" },
      { name: "St Latex Probe Cover", pack: "100's", rate: "1000.00", gst: "18%", hsn: "40149090" },
      { name: "E.B. Curette (Endometrial Biopsy)", pack: "Each", rate: "260.00", gst: "12%", hsn: "90189099" },
      { name: "IUI Cannula (Curve) 15 cm", pack: "Each", rate: "75.00", gst: "12%", hsn: "90183910" },
      { name: "IUI Cannula 15cm", pack: "Each", rate: "65.00", gst: "12%", hsn: "90183910" },
      { name: "Karman Cannula", pack: "Each", rate: "70.00", gst: "12%", hsn: "90183990" },
      { name: "St Speculum S/M/L", pack: "Each", rate: "70.00", gst: "12%", hsn: "90189099" },
      { name: "Unst Speculum S/M/L", pack: "Each", rate: "55.00", gst: "12%", hsn: "90189099" },
      { name: "SSG Device", pack: "Each", rate: "450.00", gst: "12%", hsn: "90183990" },
      { name: "HSG Device", pack: "Each", rate: "1000.00", gst: "12%", hsn: "90183990" },
      { name: "LH Kit", pack: "5's", rate: "300.00", gst: "12%", hsn: "38220011" },
      { name: "Amniotic Perforator", pack: "Each", rate: "70.00", gst: "12%", hsn: "90189099" },
      { name: "Cyst Aspiration Needle (320mmx17G)", pack: "Each", rate: "300.00", gst: "12%", hsn: "90183220" },
      { name: "Tubal Reconnulation Set", pack: "Each", rate: "2500.00", gst: "12%", hsn: "90183990" },
      { name: "Silicon Tube 5x10mm", pack: "5mtr", rate: "1500.00", gst: "18%", hsn: "40091100" },
      { name: "Silicon Tube 10x16mm", pack: "2.5mtr", rate: "1500.00", gst: "18%", hsn: "4009100" },
      { name: "Silicon Vacuum Cup S/M/L", pack: "Each", rate: "1500.00", gst: "12%", hsn: "9018" },
      { name: "Nipple Puller", pack: "Each", rate: "150.00", gst: "18%", hsn: "4016990" },
      { name: "Probe Guide", pack: "One", rate: "35000.00", gst: "12%", hsn: "90189099" },
      { name: "Silicone Vaginal Dilator Set", pack: "One", rate: "3000.00", gst: "18%", hsn: "40169990" }
    ]
  }
];
