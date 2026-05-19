/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Stethoscope, 
  RotateCcw, 
  Activity, 
  Layers, 
  Sparkles, 
  Flame, 
  Baby, 
  ShieldCheck,
  UserCheck,
  Cpu,
  Heart,
  Calendar,
  Clock,
  Phone
} from 'lucide-react';

export const CLINIC_INFO = {
  name: "Affection Dental Care",
  tagline: "Your Smile Deserves Expert Care",
  description: "Advanced Dental Treatments with a Gentle Touch",
  aboutShort: "At Affection Dental Care, we believe everyone deserves a healthy, confident smile. Our clinic is designed to provide a calm, anxiety-free environment where patients of all ages can receive professional oral healthcare.",
  phone: "+91 96870 56003",
  address: "GF 21, Saffron Complex, Near Narhari Hospital, Fatehgunj, Vadodara, Gujarat 390008",
  location: "Saffron Shopping Center, Fatehgunj",
  googleRating: 4.8,
  reviewsCount: "1,000+",
  whatsapp: "919687056003",
  hours: "Mon - Sat: 9AM - 8PM",
  email: "info@affectiondental.com",
};

export const SERVICES = [
  {
    id: "cleaning",
    title: "Teeth Cleaning",
    description: "Comprehensive prophylaxis to remove plaque, tartar, and surface stains for a fresh smile.",
    icon: Stethoscope,
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Painless laser-assisted root canal treatments to save your natural teeth and relieve pain.",
    icon: RotateCcw,
  },
  {
    id: "implants",
    title: "Dental Implants",
    description: "Permanent and durable tooth replacement solutions with a natural look and feel.",
    icon: Activity,
  },
  {
    id: "braces",
    title: "Braces & Aligners",
    description: "Orthodontic solutions including invisible aligners for a perfectly straighter smile.",
    icon: Layers,
  },
  {
    id: "makeover",
    title: "Smile Makeover",
    description: "Customized cosmetic plans to enhance the aesthetic appearance and confidence of your smile.",
    icon: Sparkles,
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description: "Professional whitening treatments to brighten your smile safely and effectively.",
    icon: Flame,
  },
  {
    id: "kids-dentistry",
    title: "Kids Dentistry",
    description: "Shedding the fear of dentists with kid-friendly treatments, games, and gentle care.",
    icon: Baby,
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Advanced procedures to aesthetic dental concerns, from bonding to porcelain veneers.",
    icon: Heart,
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Doctors",
    description: "Highly qualified dental surgeons with years of expertise in specialized treatments.",
    icon: UserCheck,
  },
  {
    title: "Modern Equipment",
    description: "Equipped with the latest digital dental technologies for precise diagnostics and treatment.",
    icon: Cpu,
  },
  {
    title: "Comfortable Clinic",
    description: "A soothing atmosphere designed for patient relaxation and anxiety-free visits.",
    icon: Heart,
  },
  {
    title: "Hygienic Environment",
    description: "Strict 7-step sterilization following international standards for your complete safety.",
    icon: ShieldCheck,
  },
  {
    title: "Affordable Treatments",
    description: "Premium healthcare services at transparent and patient-friendly pricing.",
    icon: Sparkles,
  },
  {
    title: "Personalized Care",
    description: "Every patient receives a unique treatment plan tailored specifically to their needs.",
    icon: Clock,
  }
];

export const TESTIMONIALS = [
  {
    name: "Rahul Deshmukh",
    role: "Verified Patient",
    text: "Truly the best dental experience I've had. The doctor was very patient and explained everything clearly. Painless root canal!",
    rating: 5,
    initial: "R"
  },
  {
    name: "Sneha Patel",
    role: "Verified Patient",
    text: "Taking my kids to a dentist used to be a nightmare until we found Affection Dental. The staff is so friendly and good with children.",
    rating: 5,
    initial: "S"
  },
  {
    name: "Amit Shah",
    role: "Verified Patient",
    text: "Cleanest clinic in Fatehgunj. Very professional and the equipments are high tech. Highly recommend for implants.",
    rating: 5,
    initial: "A"
  }
];

export const DOCTORS = [
  {
    name: "Dr. Anish Patel",
    qualifications: "BDS, MDS (Oral & Maxillofacial Surgery)",
    specialties: "Implantologist & Cosmetic Surgeon",
    experience: "12+ Years Experience"
  },
  {
    name: "Dr. Priya Sharma",
    qualifications: "BDS, MDS (Endodontics)",
    specialties: "Restorative Expert & Root Canal Specialist",
    experience: "8+ Years Experience"
  }
];

export const GALLERY_IMAGES = [
  {
    url: "/src/assets/images/modern_reception_1779179692142.png",
    title: "Modern Reception"
  },
  {
    url: "/src/assets/images/treatment_room_1779179711797.png",
    title: "Advanced Treatment Room"
  },
  {
    url: "/src/assets/images/sterilization_area_1779179728044.png",
    title: "Sterilized Equipment"
  },
  {
    url: "/src/assets/images/kids_dental_1779179746052.png",
    title: "Kids Dental Area"
  }
];
