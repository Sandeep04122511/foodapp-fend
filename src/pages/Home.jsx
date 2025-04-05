import React from "react";

const Home = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f8f9fa", // Light background color
        minHeight: "100vh", // Full viewport height
      }}
    >
      {/* Heading */}
      <h1 style={{ color: "#333", fontSize: "2.5rem", marginBottom: "20px" }}>
        Welcome to Food Delivery Application
      </h1>

      {/* Image */}
      <img
        src="home.avif" // Food delivery image
        alt="Food Delivery"
        style={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          marginBottom: "20px",
        }}
      />

      {/* Description */}
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "40px" }}>
        Order your favorite food from the best restaurants in town!
      </p>

      {/* Restaurants Section */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#333", fontSize: "2rem", marginBottom: "20px" }}>
          Top Restaurants
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "250px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Italian restaurant image
              alt="Sankam Restorent"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "10px" }}>
              Sankam Restorent
            </h3>
            <p style={{ color: "#555", fontSize: "1rem" }}>
              Specializes in Italian cuisine. Try their delicious pasta and pizza!
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "250px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Indian restaurant image
              alt="Apoorva Restorent"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "10px" }}>
              Apoorva Restorent
            </h3>
            <p style={{ color: "#555", fontSize: "1rem" }}>
              Famous for its Indian dishes. Don't miss their butter chicken!
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "250px",
            }}
          >
            <img
              src="rasta.jpg" // Japanese restaurant image
              alt="Rasta Resto bar"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "10px" }}>
              Rasta Resto bar
            </h3>
            <p style={{ color: "#555", fontSize: "1rem" }}>
              Best for sushi and Japanese cuisine. Fresh and authentic!
            </p>
          </div>
        </div>
      </div>

      {/* Best Items Section */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#333", fontSize: "2rem", marginBottom: "20px" }}>
          Best Items
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "250px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Margherita Pizza image
              alt="Margherita Pizza"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "10px" }}>
              Margherita Pizza
            </h3>
            <p style={{ color: "#555", fontSize: "1rem" }}>
              Classic Italian pizza with fresh mozzarella and basil.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "250px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Butter Chicken image
              alt="Butter Chicken"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "10px" }}>
              Butter Chicken
            </h3>
            <p style={{ color: "#555", fontSize: "1rem" }}>
              Creamy and flavorful Indian chicken curry.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "250px",
            }}
          >
            <img
              src="sushi platter.jpg" // Sushi Platter image
              alt="Sushi Platter"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "10px" }}>
              Sushi Platter
            </h3>
            <p style={{ color: "#555", fontSize: "1rem" }}>
              A variety of fresh sushi rolls and sashimi.
            </p>
          </div>
        </div>
      </div>

      {/* Menu Cards Section */}
      <div>
        <h2 style={{ color: "#333", fontSize: "2rem", marginBottom: "20px" }}>
          Menu Cards
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "250px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Italian Menu image
              alt="Italian Menu"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "10px" }}>
              Italian Menu
            </h3>
            <ul style={{ color: "#555", fontSize: "1rem", listStyle: "none", padding: 0 }}>
              <li>Pasta Carbonara</li>
              <li>Margherita Pizza</li>
              <li>Tiramisu</li>
            </ul>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "250px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Indian Menu image
              alt="Indian Menu"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "10px" }}>
              Indian Menu
            </h3>
            <ul style={{ color: "#555", fontSize: "1rem", listStyle: "none", padding: 0 }}>
              <li>Butter Chicken</li>
              <li>Biryani</li>
              <li>Gulab Jamun</li>
            </ul>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "250px",
            }}
          >
            <img
              src="japanmenu.jpg" // Japanese Menu image
              alt="Japanese Menu"
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "10px" }}>
              Japanese Menu
            </h3>
            <ul style={{ color: "#555", fontSize: "1rem", listStyle: "none", padding: 0 }}>
              <li>Sushi Platter</li>
              <li>Ramen</li>
              <li>Mochi</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;