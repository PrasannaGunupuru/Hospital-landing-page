import { FaTooth, FaLungs, FaBrain, FaNotesMedical } from 'react-icons/fa';

export const services = [
  {
    icon: <FaTooth size={48} />,
    title: 'Dental Care',
    desc: 'Preventive and cosmetic dental services to keep your smile bright.',
  },
  {
    icon: <FaLungs size={48} />,
    title: 'Pulmonary',
    desc: 'Respiratory health support and advanced lung care services.',
  },
  {
    icon: <FaBrain size={48} />,
    title: 'Neurological',
    desc: 'Expert care for brain and nervous system disorders.',
  },
  {
    icon: <FaNotesMedical size={48} />,
    title: 'Pediatrics',
    desc: 'Healthcare services dedicated to children and young patients.',
  },
];


export const specialists = [
  {
    name: 'Dr. Ayesha Khan',
    dept: 'Cardiologist',
    image: require('../assets/doctor1.jpg'),
  },
  {
    name: 'Dr. John Smith',
    dept: 'Neurologist',
    image: require('../assets/doctor2.jpg'),
  },
  {
    name: 'Dr. Maria Perez',
    dept: 'Pediatrician',
    image: require('../assets/doctor3.jpg'),
  },
  {
    name: 'Dr. David Lee',
    dept: 'Orthopedic Surgeon',
    image: require('../assets/doctor4.jpg'),
  },
];
export const testimonials = [
  {
    name: "Jacqueline Asong",
    role: "Patient",
    quote: "I wanted to thank everyone at this facility for the quality of care and compassion they showed during my stay.",
    image: "patient1.jpeg",
  },
  {
    name: "Patrícia Ribeiro",
    role: "Patient",
    quote: "The doctors and nurses were very professional and friendly. I highly recommend this hospital to everyone.",
    image: "patient2.jpeg",
  },
];
