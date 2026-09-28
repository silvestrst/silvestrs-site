---
title: "Experience"
layout: "experience"
description: "Roles, responsibilities and highlights from over ten years of software engineering across digital-asset custody, embedded firmware, Linux graphics and railway safety."
---

## Crypto.com

{{< role >}}
Senior Blockchain Security Engineer, Jan 2024 – Aug 2026
Blockchain Security Engineer, Apr 2022 – Dec 2023 · Remote
{{< /role >}}

Contributed to Crypto.com's institutional digital-asset custody platform, a Rust-based system using Trusted Execution Environments (TEEs) to protect key management and transaction signing across staking and DeFi workflows.

- Designed and implemented the extensible core of a Merkle-tree-based integrity system for security-critical MongoDB collections, combining TEE-signed documents, freshness-based validation and periodic incremental tree updates to provide scalable, bounded rollback detection.
- Developed a complete WalletConnect v2 client in Rust from the specification: the Sign protocol, CAIP namespace negotiation, X25519/HKDF key agreement and ChaCha20-Poly1305 encryption. Integrated EVM transactions and EIP-712 typed-data signing with TEE-protected keys and an asynchronous m-of-n approval workflow, validated end to end with Uniswap, PancakeSwap and other EVM DApps.
- Implemented and extended end-to-end support for networks across EVM, Bitcoin, Cosmos SDK, Solana, Algorand, MultiversX and Canton Network: RPC integration, transaction construction, serialisation, validation, cryptographic signing, staking and network-specific confirmation flows.
- Redesigned session management from a basic Actix session-cookie model to a JWT-based architecture with client-side inactivity tracking, heartbeat-driven renewal, bounded backend expiry and automatic logout.
- Co-designed and implemented a TEE-anchored trust channel for sensitive frontend-to-enclave operations, using a pinned RSA public key derived from enclave-protected key material to exchange frontend-generated AES keys across an untrusted backend, with TOTP or Okta tokens bound into the authentication flow.
- Hardened TOTP validation inside the enclave: RFC-aligned acceptance of the previous time step for clock skew, diagnostic logging of rejected older codes, and single-use enforcement to prevent replay.
- Extended ACL and RBAC authorisation and transaction-policy enforcement across user and organisation scopes.
- Designed and implemented a multi-source token-pricing service supporting transaction valuation, financial reporting and policy controls.
- Mentored and onboarded engineers, conducted technical interviews, and coordinated deployments and sub-team work allocation.

## lowRISC CIC

{{< role >}}
Firmware Engineer, Nov 2019 – Apr 2022 · Cambridge
{{< /role >}}

Contributed to [OpenTitan](https://opentitan.org/), an open-source silicon Root of Trust, implementing peripheral interfaces, secure-boot components, testing infrastructure and low-level chip bring-up. All of this work is public; see the [open source contributions]({{< relref "/" >}}#open-source) on the home page.

- Developed C device drivers for AES, the always-on wake-up/watchdog timer, Reset Manager, UART, RISC-V PLIC, Pinmux and SRAM Controller, carrying them through the project's formal maturity stages with unit and on-device integration tests.
- Contributed to OpenTitan's secure-boot design and implemented key components, including Mask ROM and second-stage bootloader (ROM_EXT) startup code, plus A/B image-slot linking to work around the RISC-V toolchain's lack of position-independent code support at the time.
- Built host-side boot-image tooling in Rust to construct and sign firmware images using RSA-3072 with PKCS#1 v1.5 and SHA-256, populate manifests and public-key material in the chip's required format, and generate reference digests for interoperability testing.
- Implemented a low-level C library for configuring RISC-V PMP through inline assembly (OFF, NA4, NAPOT and TOR address matching, permission combinations, region locking and alignment validation), with programmed-state verification and deliberate access-fault injection tests under Verilator.
- Extended automated Verilator suites exercising the complete production boot chain from Mask ROM through the flash-resident ROM_EXT to OS execution from SRAM; contributed SRAM scrambling and HMAC known-vector tests.
- Developed a proof-of-concept Software Integrity Tool using Git's GnuPG integration to add a signed-review mechanism, allowing cryptographic verification of repository integrity down to the root commit.
- Built a proof-of-concept OpenTitan–Tock OS integration by generating Rust bindings for OpenTitan's C libraries and adapting Tock's UART driver for the OpenTitan UART peripheral.
- Mentored new starters and interviewed firmware and LLVM candidates.

## Imagination Technologies

{{< role >}}
Software Design Engineer, Feb 2017 – Nov 2019 · Kings Langley
{{< /role >}}

Worked on the Rogue Driver Development Kit, everything required to deploy Imagination's GPU products into customer systems. Responsible for development and maintenance across the full Linux graphics stack, from application and system layers down to kernel space.

- Developed a no-hardware Linux DRM display driver, a null window system and an interactive VNC server, together forming a lightweight platform for feature development, testing and customer reference.
- Integrated the Rogue DDK with large open-source projects: Linux, Mesa 3D, Wayland and X.Org.
- Maintained an out-of-tree kernel driver's backwards compatibility across a wide range of kernel versions.
- Implemented multiple EGL extensions and validated their specification compliance and interoperability across Linux reference platforms.

## Zircon Software

{{< role >}}
Software Engineer, May 2015 – Feb 2017
Software Engineer Intern, Sep 2013 – Aug 2014 · Trowbridge
{{< /role >}}

- Contributed to a real-time SIL2 train-braking system deployed on Intercity Express Programme trains, developed in accordance with BS EN 50128:2011 (software for railway control and protection systems).
- Ported a control-panel application from Borland C++ Builder to .NET, and developed train-track geometry measurement modules covering rollback, direction change and position detection.

## Education

{{< role >}}
University of the West of England, Bristol · 2011 – 2015
{{< /role >}}

BSc Computer Systems Integration, First-Class Honours. A versatile software engineering degree with an emphasis on embedded and real-time systems development.
