import React from "react";

const teamMembers = [
  { name: "Amit Bisht", role: "Sr. Website Developer" },
  { name: "Rishab", role: "Affiliate Marketing Executive" },
  { name: "MD Wahid", role: "Affiliate Marketing Manager" },
  { name: "Rachi Jangidd", role: "Sr. Digital Marketer" },
  { name: "Sparsh Goyal", role: "Digital Marketing Executive" },
  { name: "Jitesh Kumar", role: "Affiliate Marketing Executive" },
  { name: "Aditya Bishwakarma", role: "Digital Marketing Executive" },
  { name: "Abhishek Kumar", role: "Affiliate Marketing Executive" },
  { name: "Saloni Dotiyal", role: "Affiliate Marketing Executive" },
  { name: "Irshad Qureshi", role: "Digital Marketing Executive" },
  { name: "Neeraj Sharma", role: "Affiliate Marketing Executive" },
];

const styles = {
  section: {
    padding: "60px 20px",
    maxWidth: 1000,
    margin: "0 auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: 10,
    fontWeight: "700",
  },
  subHeading: {
    textAlign: "center",
    marginBottom: 50,
    color: "#666",
    fontSize: "1.125rem",
    maxWidth: 600,
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: 1.5,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 30,
  },
  card: {
    padding: 25,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "default",
  },
  cardHover: {
    transform: "translateY(-8px)",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
    cursor: "pointer",
  },
  name: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: 8,
    color: "#1a202c",
  },
  role: {
    fontSize: "1rem",
    color: "#718096",
  },
};

const PeopleInSAM = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>OUR  TEAM</h2>
      <p style={styles.subHeading}>
        Get acquainted with the people who infuse creativity, technology, and passion into our work to craft your digital success.
      </p>
      <div style={styles.grid}>
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            style={{
              ...styles.card,
              ...(hoveredIndex === idx ? styles.cardHover : {}),
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={styles.name}>{member.name}</div>
            <div style={styles.role}>{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PeopleInSAM;
