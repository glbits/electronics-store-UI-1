import { Product, Category } from './types';

export const COPY_DECK = {
  hero: {
    headline: "Powering India with Premium Electronics",
    taglines: [
      "Authorized Dealer for Top Brands",
      "GST Invoicing Available for Businesses",
      "Pan-India Delivery within 3-5 Days"
    ]
  }
};

// Curated list of high-quality electronics images from Unsplash to ensure reliability
const ELECTRONICS_IMAGES = [
  "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800", // Bulb
  "https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?auto=format&fit=crop&q=80&w=800", // Switch
  "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800", // Wires
  "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800", // Fan
  "https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80&w=800", // Industrial
  "https://images.unsplash.com/photo-1621905476438-1a4948d4ecc9?auto=format&fit=crop&q=80&w=800", // Light bulb artistic
  "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=800", // Hanging lights
  "https://images.unsplash.com/photo-1592478411213-61535fdd6fca?auto=format&fit=crop&q=80&w=800", // Cables
  "https://images.unsplash.com/photo-1517260739337-6799d2dcbe19?auto=format&fit=crop&q=80&w=800", // LED strip
  "https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&q=80&w=800"  // Electronics parts
];

const generateProducts = (): Product[] => {
  const specificProducts: Product[] = [
    {
      id: "prod-001",
      title: "Lumina LED Smart Bulb 10W (Multicolor)",
      category: Category.Lighting,
      price: 499,
      short_desc: "WiFi-enabled RGB smart bulb compatible with Alexa and Google Home.",
      long_desc: "Transform your home ambiance with the Lumina LED Smart Bulb. Featuring 16 million colors, tunable white light, and seamless app control. Energy-efficient 10W output provides brightness equivalent to a 60W incandescent bulb. No hub required for setup. Works with standard Indian E27/B22 holders.",
      specs: { "Power": "10W", "Base": "B22 (Indian Standard)", "Connectivity": "WiFi 2.4GHz", "Lifespan": "25,000 hrs" },
      images: [
        "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=800"
      ],
      stock: 150,
      tags: ["smart home", "led", "lighting"],
      meta_title: "Buy Lumina LED Smart Bulb 10W | ElectroMart India",
      meta_description: "Shop Lumina LED Smart Bulb. RGB, WiFi control, energy efficient. Best price at ElectroMart.",
      sku: "LUM-LED-10W-RGB"
    },
    {
      id: "prod-002",
      title: "AeroCool High-Speed Ceiling Fan (1200mm)",
      category: Category.Fans,
      price: 2499,
      short_desc: "1200mm sweep anti-dust fan with high air delivery.",
      long_desc: "Beat the Indian summer heat with the AeroCool High-Speed Ceiling Fan. Designed with aerodynamic blades for superior air delivery (230 CMM) and silent operation. The anti-dust coating ensures easier cleaning and long-lasting finish. Perfect for living rooms and bedrooms.",
      specs: { "Sweep": "1200mm", "Speed": "380 RPM", "Power": "75W", "Color": "Ivory White" },
      images: [
        "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1587569145888-295b95ba753b?auto=format&fit=crop&q=80&w=800"
      ],
      stock: 45,
      tags: ["fan", "ceiling fan", "cooling"],
      meta_title: "AeroCool Ceiling Fan 1200mm | ElectroMart India",
      meta_description: "High speed ceiling fan with anti-dust technology. Buy AeroCool fans online.",
      sku: "AC-FAN-1200-IVY"
    },
    {
      id: "prod-003",
      title: "FlexiCore Copper Wire 1.5mm (90m Roll)",
      category: Category.Wires,
      price: 1200,
      short_desc: "Flame retardant (FR) PVC insulated copper cable, 90m roll.",
      long_desc: "Ensure safety and durability with FlexiCore FR PVC insulated copper wires. Ideal for house wiring, these wires offer high conductivity and resistance to heat and moisture. Certified ISI marked quality for peace of mind. Standard Red color for Phase.",
      specs: { "Length": "90m", "Gauge": "1.5 sq mm", "Type": "FR PVC", "Conductor": "Electrolytic Copper" },
      images: [
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1621905476438-1a4948d4ecc9?auto=format&fit=crop&q=80&w=800"
      ],
      stock: 200,
      tags: ["wiring", "electrical", "safety"],
      meta_title: "1.5mm Copper Wire Roll 90m | ElectroMart",
      meta_description: "Buy 1.5mm FR PVC Copper Wire. 90m Roll. Best price for house wiring.",
      sku: "FC-WIRE-1.5-RED"
    },
    {
      id: "prod-004",
      title: "ClickSafe Modular Switch 6A (White)",
      category: Category.Switches,
      price: 85,
      short_desc: "Elegant white modular switch with soft-touch operation.",
      long_desc: "Upgrade your walls with ClickSafe Modular Switches. Featuring a sleek, rimless design and polycarbonate construction for fire resistance. Tested for over 100,000 clicks to ensure longevity and reliability. Fits all standard modular plates.",
      specs: { "Rating": "6A", "Voltage": "240V", "Type": "1-Way", "Material": "Polycarbonate (FR Grade)" },
      images: [
        "https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?auto=format&fit=crop&q=80&w=800"
      ],
      stock: 500,
      tags: ["switch", "modular", "interior"],
      meta_title: "ClickSafe Modular Switch 6A | ElectroMart",
      meta_description: "Premium modular switches for modern homes. 6A rating, fire resistant.",
      sku: "CS-SW-6A-WHT"
    },
    {
      id: "prod-005",
      title: "VoltGuard Voltage Stabilizer for 1.5 Ton AC",
      category: Category.Accessories,
      price: 1850,
      short_desc: "Automatic voltage stabilizer for 1.5 ton ACs with digital display.",
      long_desc: "Protect your expensive air conditioners with VoltGuard. It provides a wide working range (130V-300V) and intelligent time delay system to ensure your appliances are safe from voltage fluctuations common in Indian grids. Wall mountable design.",
      specs: { "Capacity": "4kVA", "Application": "AC up to 1.5 Ton", "Display": "Digital LED", "Warranty": "3 Years" },
      images: [
        "https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80&w=800"
      ],
      stock: 20,
      tags: ["stabilizer", "protection", "ac accessory"],
      meta_title: "VoltGuard AC Stabilizer | ElectroMart",
      meta_description: "Voltage stabilizer for 1.5 Ton AC. Protects against fluctuations.",
      sku: "VG-STAB-4KVA"
    },
    {
      id: "prod-006",
      title: "BrightRay LED Batten 20W (Cool Day Light)",
      category: Category.Lighting,
      price: 299,
      short_desc: "Slim profile LED tubelight for glare-free illumination.",
      long_desc: "Replace your old fluorescent tubes with the BrightRay 20W LED Batten. Delivers high brightness of 2000 lumens with zero flickering. Easy to install with included clips. Perfect for living rooms, kitchens, and offices.",
      specs: { "Power": "20W", "Length": "4 Feet", "Color Temp": "6500K", "Material": "Polycarbonate" },
      images: ["https://images.unsplash.com/photo-1520695078784-0a377045a498?auto=format&fit=crop&q=80&w=800"],
      stock: 300,
      tags: ["tubelight", "led", "lighting"],
      meta_title: "20W LED Batten Tube Light | ElectroMart",
      meta_description: "Buy 20W LED Batten. Energy saving tube light for home. Cool daylight.",
      sku: "BR-LED-BAT-20W"
    },
    {
      id: "prod-007",
      title: "PowerMate Extension Board (4+4)",
      category: Category.Accessories,
      price: 450,
      short_desc: "4 universal sockets with 4 individual switches and indicator.",
      long_desc: "Heavy duty extension board with 4 universal sockets suitable for international plugs. Each socket has an individual switch and LED indicator. Features a 2-meter long high-quality copper wire cord with a 3-pin plug. Fuse protection included.",
      specs: { "Sockets": "4 Universal", "Switches": "4", "Cord Length": "2 Meters", "Rating": "6A 240V" },
      images: ["https://images.unsplash.com/photo-1586774637777-62f790c88556?auto=format&fit=crop&q=80&w=800"],
      stock: 75,
      tags: ["extension", "power strip", "accessories"],
      meta_title: "4 Socket Extension Board | ElectroMart",
      meta_description: "Buy PowerMate Extension Board. 4 Sockets, 4 Switches, 2m wire.",
      sku: "PM-EXT-44-WHT"
    },
    {
      id: "prod-008",
      title: "SafeGuard MCB C-Type 32A",
      category: Category.Switches,
      price: 210,
      short_desc: "Single pole miniature circuit breaker for overload protection.",
      long_desc: "Ensure complete circuit protection with SafeGuard MCB. Designed to trip instantly during short circuits and overloads, preventing electrical fires. Suitable for ACs, geysers, and heavy appliances. ISI marked for safety.",
      specs: { "Poles": "Single Pole (SP)", "Current Rating": "32A", "Curve": "C-Type", "Breaking Capacity": "10kA" },
      images: ["https://images.unsplash.com/photo-1555546252-82dc35d5f278?auto=format&fit=crop&q=80&w=800"],
      stock: 120,
      tags: ["mcb", "circuit breaker", "safety"],
      meta_title: "32A C-Type MCB | ElectroMart",
      meta_description: "Buy SafeGuard 32A MCB for home safety. Overload protection.",
      sku: "SG-MCB-SP-32A"
    },
    {
      id: "prod-009",
      title: "VentX Exhaust Fan 200mm",
      category: Category.Fans,
      price: 999,
      short_desc: "High-speed exhaust fan for kitchen and bathroom ventilation.",
      long_desc: "Keep your indoor air fresh with the VentX Exhaust Fan. Features a powerful motor and rust-proof metal body/blades. Effectively removes smoke, odors, and humidity. Ideal for kitchens and bathrooms.",
      specs: { "Sweep": "200mm (8 inch)", "Speed": "1350 RPM", "Body": "Metal", "Grill": "Safety Guard" },
      images: ["https://images.unsplash.com/photo-1574744474753-43b9c7c251d1?auto=format&fit=crop&q=80&w=800"],
      stock: 60,
      tags: ["exhaust fan", "ventilation", "kitchen"],
      meta_title: "Kitchen Exhaust Fan 8 inch | ElectroMart",
      meta_description: "Heavy duty exhaust fan for kitchen and bathroom. Metal body.",
      sku: "VX-EXH-200-GRY"
    },
    {
      id: "prod-010",
      title: "StudyLight Adjustable Desk Lamp",
      category: Category.Lighting,
      price: 850,
      short_desc: "Flexible neck desk lamp with E27 holder for study tables.",
      long_desc: "Focus better with the StudyLight Desk Lamp. Features a flexible gooseneck to direct light exactly where you need it. Sturdy metal base ensures stability. Compatible with any standard E27 LED bulb (bulb not included).",
      specs: { "Base": "E27", "Material": "Metal & Plastic", "Switch": "Rocker Switch", "Height": "35cm" },
      images: ["https://images.unsplash.com/photo-1513506003011-38706d7d6e6f?auto=format&fit=crop&q=80&w=800"],
      stock: 40,
      tags: ["lamp", "study", "table lamp"],
      meta_title: "Adjustable Study Desk Lamp | ElectroMart",
      meta_description: "Buy table lamp for study. Flexible neck, metal base. Best price.",
      sku: "SL-LAMP-BLK"
    },
    {
      id: "prod-011",
      title: "InstaHot Immersion Rod 1500W",
      category: Category.Accessories,
      price: 550,
      short_desc: "Shock-proof water heater rod with bucket hook.",
      long_desc: "Get hot water instantly with the InstaHot Immersion Rod. Designed with a copper heating element for fast heating and nickel plating for corrosion resistance. Features a shock-proof plastic handle and water level indicator.",
      specs: { "Power": "1500W", "Element": "Copper", "Cord": "1.5m", "Safety": "ISI Marked" },
      images: ["https://images.unsplash.com/photo-1585435465945-8c4d51a9e7f5?auto=format&fit=crop&q=80&w=800"],
      stock: 200,
      tags: ["heater", "water heater", "winter"],
      meta_title: "1500W Immersion Water Heater | ElectroMart",
      meta_description: "Shockproof immersion rod for water heating. 1500W copper element.",
      sku: "IH-ROD-1.5KW"
    },
    {
      id: "prod-012",
      title: "Melody Wireless Doorbell",
      category: Category.Accessories,
      price: 799,
      short_desc: "Remote control doorbell with 32 selectable tunes.",
      long_desc: "Install a doorbell without any wiring using the Melody Wireless Doorbell. Long-range remote works up to 100 meters. Choose from 32 polyphonic melodies. The receiver plugs directly into a standard socket.",
      specs: { "Range": "100m Open Area", "Tunes": "32", "Battery": "1x12V (Remote)", "Volume": "Adjustable" },
      images: ["https://images.unsplash.com/photo-1532054694488-d6985a974dfd?auto=format&fit=crop&q=80&w=800"],
      stock: 85,
      tags: ["doorbell", "wireless", "home automation"],
      meta_title: "Wireless Remote Doorbell | ElectroMart",
      meta_description: "Buy wireless doorbell with long range. 32 tunes. Easy installation.",
      sku: "MEL-DB-WL"
    },
    {
      id: "prod-013",
      title: "ProCheck Digital Multimeter",
      category: Category.Accessories,
      price: 350,
      short_desc: "Handheld multimeter for measuring voltage, current, and resistance.",
      long_desc: "Essential tool for electricians and DIY enthusiasts. The ProCheck Multimeter measures DC/AC voltage, DC current, and resistance with high accuracy. Includes continuity buzzer and diode test function. Comes with a pair of test probes and battery.",
      specs: { "Display": "LCD", "DC Voltage": "200mV-1000V", "AC Voltage": "200V-750V", "Safety": "Overload Protection" },
      images: ["https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"],
      stock: 30,
      tags: ["multimeter", "tools", "testing"],
      meta_title: "Digital Multimeter DT830D | ElectroMart",
      meta_description: "Buy digital multimeter for electronics repair. Measure voltage, current.",
      sku: "PC-MM-DT830"
    },
    {
      id: "prod-014",
      title: "SolderMaster Iron Kit 25W",
      category: Category.Accessories,
      price: 299,
      short_desc: "Soldering iron with stand and solder wire for electronics repair.",
      long_desc: "Complete soldering kit for beginners and professionals. Includes a 25W precision soldering iron with a pointed tip, a safety stand, and a tube of high-quality solder wire. Ideal for PCB repair, wire joining, and craft projects.",
      specs: { "Power": "25W", "Voltage": "230V", "Tip": "Pointed", "Heating": "Fast Heat" },
      images: ["https://images.unsplash.com/photo-1563765584523-8b77873528b3?auto=format&fit=crop&q=80&w=800"],
      stock: 50,
      tags: ["soldering", "tools", "kit"],
      meta_title: "25W Soldering Iron Kit | ElectroMart",
      meta_description: "Buy soldering iron kit with stand and wire. Best for electronics projects.",
      sku: "SM-IRON-25W"
    },
    {
      id: "prod-015",
      title: "Royal Chandelier (Modern Gold)",
      category: Category.Lighting,
      price: 4500,
      short_desc: "Luxurious 6-arm chandelier for living and dining rooms.",
      long_desc: "Add a touch of elegance to your home with the Royal Modern Chandelier. Finished in premium gold plating with crystal accents. Features 6 arms compatible with E14 candle bulbs (bulbs not included). Perfect for high ceilings.",
      specs: { "Arms": "6", "Holder": "E14", "Finish": "Gold Plated", "Diameter": "60cm" },
      images: ["https://images.unsplash.com/photo-1543198126-e83d8a4a58b5?auto=format&fit=crop&q=80&w=800"],
      stock: 10,
      tags: ["chandelier", "luxury", "decor"],
      meta_title: "Modern Gold Chandelier | ElectroMart",
      meta_description: "Buy luxury chandelier for living room. 6 arm modern design.",
      sku: "RY-CHAND-06G"
    }
  ];

  // Generate a few more items to flesh out the catalog to ~30 total
  const generatedProducts = Array.from({ length: 15 }).map((_, i) => {
    const cats = Object.values(Category);
    const cat = cats[i % cats.length];
    // Use images from the specific list to ensure quality, cycling through them
    const sourceProduct = specificProducts[i % specificProducts.length];
    
    return {
      id: `prod-gen-${i + 16}`,
      title: `${cat} Series ${i + 1} - Pro Edition`,
      category: cat,
      price: 200 + (i * 120),
      short_desc: `Professional grade ${cat.toLowerCase()} component for reliability.`,
      long_desc: `Experience superior performance with our Pro Edition ${cat} range. Built to withstand Indian power conditions and designed for long operational life. Comes with standard warranty.`,
      specs: { "Grade": "Commercial", "Warranty": "1 Year", "Origin": "Made in India" },
      images: sourceProduct.images, // Reuse high quality images
      stock: (i * 7) % 40,
      tags: [cat.toLowerCase(), "pro", "commercial"],
      meta_title: `${cat} Pro Series ${i + 1} | ElectroMart`,
      meta_description: `Buy ${cat} Pro Series. Professional grade electronics.`,
      sku: `GEN-${cat.substring(0, 3).toUpperCase()}-${200 + i}`
    };
  });

  return [...specificProducts, ...generatedProducts];
};

export const products = generateProducts();

export const categories = Object.values(Category);