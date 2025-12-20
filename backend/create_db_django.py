#!/usr/bin/env python3
"""
Create a Django-compatible sqlite database file `db.sqlite3` and seed it
with the sample products. This script creates the table named
`products_product` (matching the Django model `products.Product`).

Run from the `backend` folder:
  python create_db_django.py

After running this, `db.sqlite3` will exist and can be committed to the repo
if desired for the quiz submission.
"""
import sqlite3
from pathlib import Path

HERE = Path(__file__).resolve().parent
DB_PATH = HERE / 'db.sqlite3'

SCHEMA_SQL = '''
CREATE TABLE IF NOT EXISTS products_product (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  image TEXT,
  description TEXT,
  category TEXT,
  price REAL NOT NULL DEFAULT 0.0,
  countInStock INTEGER NOT NULL DEFAULT 0,
  rating REAL NOT NULL DEFAULT 0.0,
  numReviews INTEGER NOT NULL DEFAULT 0
);
'''

SAMPLE = [
    (
        'Banana Whale Plush',
        '/images/Banana Whale.jpg',
        'Handmade crochet banana whale — soft, cute, and perfect as a gift.',
        'plushies',
        12.0,
        5,
        4.8,
        10,
    ),
    (
        'Bocchi',
        '/images/Bocchi.jpg',
        'Cute Bocchi-inspired crochet doll — collectible and lovingly stitched.',
        'plushies',
        18.0,
        4,
        4.7,
        8,
    ),
    (
        'Roses Bouquet',
        '/images/Roses.jpg',
        'Crochet roses bouquet — everlasting floral decoration.',
        'flowers',
        25.0,
        2,
        4.9,
        9,
    ),
]


def create_and_seed(path: Path):
    conn = sqlite3.connect(str(path))
    cur = conn.cursor()
    cur.executescript(SCHEMA_SQL)

    cur.execute('SELECT COUNT(1) FROM products_product')
    has = cur.fetchone()[0]
    if has:
        print(f"Database already seeded ({has} rows). Skipping inserts.")
    else:
        cur.executemany(
            'INSERT INTO products_product (name,image,description,category,price,countInStock,rating,numReviews) VALUES (?,?,?,?,?,?,?,?)',
            SAMPLE,
        )
        conn.commit()
        print(f"Inserted {len(SAMPLE)} sample rows into products_product table.")

    conn.close()


if __name__ == '__main__':
    create_and_seed(DB_PATH)
    print('Created database at:', DB_PATH)
