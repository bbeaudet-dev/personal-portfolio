# Project Details Reference

This document contains the original project details and specifications provided by Ben for portfolio updates.

## New Portfolio Projects

### 1. Cerelog - Brainwave Data Flow & Serial Communication

- **Date**: June 27th 2025
- **Company**: Cerelog - Beyond Focus Wearables and Research Tools
- **Mission**: Revolutionize human-computer interaction through advanced neural interface technology
- **Product**: Cerelog ESP-EEG - 8-channel biosensing board for EEG, EMG, ECG, and BCI research
- **Role**: Brainflow integration & dataflow
- **Key Tasks**:
  - Improve hardware integration with Brainflow library
  - Tinker with time-function to improve timestamping accuracy (125ms target)
  - Manage error handling and data formatting
  - Parametric configuration of boards via Python
- **Technical Details**:
  - ESP32-based hardware with ADS1289 chip
  - Serial protocol with specific message format
  - BrainFlow compatibility for signal processing
  - 500Hz data collection with real-time processing

### 2. Trackwork Automation - CAD Automation for Trackwork

- **Date**: February 2025
- **Context**: Mentioned in blog posts (taking the leap, tech eval, week 4 reflection)
- **Focus**: CAD automation and project management tools
- **Technology**: Visual Basic applications for CAD automation

### 3. OR-Free - Surgical Device Demonstration Kit

- **Date**: January 2023
- **Company**: Lazurite
- **Product**: ArthroFree - First wireless surgical device for minimally invasive surgery (arthroscopy)
- **Challenge**: Product typically requires full operating room to demonstrate
- **Solution**: Self-contained, self-powered, portable demonstration kit
- **Specifications**:
  - 6+ hours battery life
  - 1080p monitor
  - Easy connection and setup
  - Professional appearance
- **Components**:
  - GAEMS Sentinel portable gaming monitor (base case and display)
  - OmniCharge 20+ power system
  - Wireless device and receiver storage
  - 1-2 arthroscopes and couplers
  - 2+ device batteries with charging capability
  - 10+ custom cables and electronic components from Digikey
  - AirTag integration for device tracking
  - Magnetic attachment system
- **Design Features**:
  - 15+ custom 3D-printed and laser-cut parts
  - Aesthetically pleasing acrylic shell
  - Easily detachable using magnets
  - Custom foam insert from packaging manufacturer
  - Manufacturing documentation with 100+ steps
- **Outcome**: Manufactured 10 kits distributed to sales team and distributors

### 4. Birkdale - Mirror Therapy Rehabilitation Device

- **Date**: June 2019
- **Context**: Team of 5 engineers, London-based project
- **Purpose**: Medical device for stroke patients using mirror therapy
- **Technology**: Bluetooth, haptic feedback, touch sensors
- **Design Process**: Full design thinking process with patient interviews
- **Components**:
  - Two ergonomic hand-held devices
  - Touch sensors on one side, haptic feedback on the other
  - Bluetooth communication between devices
  - Arduino boards mounted on rigid "arched handle"
  - Physical therapist guidance system
- **Outcome**: 75% cheaper than market alternatives
- **Personal Note**: Met and worked alongside future wife on this project
- **Images**: 6 photos available in public/portfolio/birkdale/

### 5. Aeroelastic Instability - Computational Analysis of Aircraft Wing Dynamics

- **Date**: December 2018 - May 2019
- **Research**: Based on Earl Dowell's work on nonlinear dynamics and chaos theory
- **Focus**: Aeroelastic instability (flutter) case study
- **Methodology**:
  - Used Dowell's airfoil model and governing equations
  - 2DoF system of 2nd-order ODEs
  - MATLAB's ode23 solver
  - Time-domain responses and phase portraits
  - Bifurcation diagrams showing Hopf Bifurcation
- **Key Findings**:
  - Demonstrated static and dynamic instabilities
  - Evidence of limit-cycle oscillations (LCOs)
  - Flutter point prediction
  - Results consistent with commercial aircraft flying speeds
- **Computational Challenges**: Individual bifurcation diagrams took MATLAB 48 hours
- **Personal Impact**: Foundational in development as computational engineer
- **Personal Note**: MATLAB skills helped win over future wife on 8-hour flight to London

### 6. Cylinder-Piston Pump - Piston-Cylinder Pump Design & Manufacturing

- **Date**: March 2019
- **Objective**: Maximize water mass pumped in five-minute competition
- **Components**: Piston, cylinder, connecting rod, crankshaft
- **Process**: Complete design, manufacturing, inspection, assembly, and testing
- **Competition**: Endurance competition among three other teams
- **Result**: First place and class record - 18 gallons in five minutes

## Tagging System

### New Tag Categories

- **Software** (React, web apps, APIs)
- **Firmware** (Arduino, ESP32, firmware)
- **Mechanical** (mechanical systems, manufacturing, 3D printing)
- **Computation** (mathematical modeling, simulations)
- **Game Dev** (mobile games, interactive experiences)
- **Creative** (creative tools and design, gamification)
- **AI** (AI-centric features or integrations)

### Project Tagging Examples

- Trackwork automation: Mechanical, Software
- Aeroelastic project: Mechanical, Computation
- Game projects (blob game, balatrice, core defender, etc.): Game Dev
- Balatro sticker tracker: Creative
- Destination bingo: Software, Creative
- Image analyzer: Software, Computation
- OR-Free: Mechanical
- Birkdale: Firmware, Mechanical
- Cerelog: Firmware
- Cylinder pump: Mechanical
- Pokedex: Creative
- Chatbot: Creative, AI

## Mobile Optimization Plan

### Current Issues

- "For fun" tab goes to 2 rows on mobile
- Site designed for desktop first, mobile optimizations added later

### Mobile-First Design Strategy

1. **Responsive Typography**: Scale text sizes appropriately
2. **Touch-Friendly Interactions**: Larger tap targets, better spacing
3. **Simplified Navigation**: Hamburger menu implementation
4. **Optimized Images**: Proper sizing and loading
5. **Content Hierarchy**: Ensure important content is visible without scrolling

### Component Refactoring

- Break out navigation into separate components:
  - `MobileNav.tsx` - Hamburger menu and mobile navigation
  - `DesktopNav.tsx` - Desktop navigation with hover effects
  - `Nav.tsx` - Main component that chooses which to render

## Unimplemented Ideas

Projects that don't need full write-ups yet:

- Trackwork design portfolio (separate from automation programs)
- Civil land surveying
- Solar go kart

## Personal Details to Preserve

- Meeting future wife on London therapy device project
- MATLAB skills helping win over wife on 8-hour flight
- Personal connections and stories within projects
- Transition from mechanical engineering to software engineering
- Impact of projects on career development and technical growth
