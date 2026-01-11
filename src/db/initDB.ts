import initSqlJs from "sql.js";

let db: any = null;

export const initializeDB = async () => {
  try {
    const SQL = await initSqlJs({
      locateFile: (file: string) => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`,
    });

    db = new SQL.Database();

    // Create tables
    db.run(`
      CREATE TABLE IF NOT EXISTS personal (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        profession TEXT,
        location TEXT,
        phone TEXT,
        email TEXT,
        photo TEXT,
        summary TEXT
      )
    `);

    // Insert sample data (you could load from resumeData here)
    db.run(`
      INSERT INTO personal (name, profession, location, phone, email, photo, summary)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [
      "Anele Basopu",
      "Software Developer & Logistics Professional",
      "Butterworth, South Africa 4960",
      "+27835978556",
      "anelebasopu@gmail.com",
      "https://via.placeholder.com/150",
      "Experienced professional with a strong background..."
    ]);

    console.log("✅ SQLite DB initialized");
    return db;
  } catch (err) {
    console.error("❌ Failed to initialize SQLite:", err);
  }
};

export const getDB = () => db;