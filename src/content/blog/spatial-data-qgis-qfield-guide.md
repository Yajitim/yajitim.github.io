---
title: "Field-to-Cloud GIS Workflows: Collecting Spatial Data with QGIS & QFIELD"
description: "How we collected and verified spatial data for thousands of landed properties in Benue State to meet World Bank project standards."
pubDate: 2026-07-01
category: "Tutorial"
tags: ["QGIS", "QFIELD", "Spatial Data", "GIS", "Field Ops"]
readingTime: 6
featured: false
coverImage: "/blog/qgis-qfield.jpg"
---

During the World Bank Assisted **SFTAS-DLI 11.5 Project** at BENGIS, our task was to map, verify, and digitize landed property records across Makurdi, Gboko, and Otukpo. 

Here is how we set up a seamless offline-to-online GIS data pipeline using **QGIS** and **QFIELD**.

## 1. Setting Up the QGIS Project Base

In QGIS, we configured layers for property boundaries, parcel IDs, ownership metadata, and GPS coordinates. Crucially, we set up **field validation rules** in QGIS forms before pushing to mobile devices:

- Mandatory parcel ID patterns (`MKD-PAR-XXXX`)
- Dropdown menus for land use categories (Residential, Commercial, Agricultural)
- Photo attachment fields tied to spatial points

## 2. Deploying QFIELD on Mobile Devices

QFIELD allows field enumerators to capture spatial geometries offline in remote areas without internet connectivity.

1. Package the QGIS project via **QFieldSync** plugin.
2. Synchronize projects to mobile tablets.
3. Field teams capture boundary polygons and attributes offline.

## 3. Data Verification & Conflict Resolution

When field teams returned, incoming layers were merged into a central QGIS database. We ran automated topological validation scripts to detect:

- Overlapping parcel boundaries
- Duplicate parcel IDs
- Missing required attributes

## Results

This field-to-office pipeline enabled us to process thousands of verified records efficiently, directly contributing to Benue State's qualification for the **$2.5M World Bank grant**.
