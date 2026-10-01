---
title: "Sway Regolith 3 copycat"
description: "An approximation of the Regolith 3 desktop on Ubuntu 26.04, built from standard repository packages. Regolith did not yet support 26.04 at the beginning of August 2026."
tech: ["Shell", "Python", "Sway", "Ubuntu"]
repo: "https://github.com/silvestrst/sway-regolith3-copycat"
weight: 1
---

## What it is

A recreation of the Regolith 3 desktop environment on Ubuntu 26.04 using only
packages from the standard Ubuntu archive: Sway as the compositor, with
configuration and helper scripts that bring back the Regolith look, keybindings
and workflow.

## Why I built it

At the beginning of August 2026 Regolith did not yet support Ubuntu 26.04, so
after a fresh install I rebuilt the desktop from what the standard archive
already ships.

## Status

The install script and configuration were put together after the fact, from a
machine that was already set up. The script has not yet been run end to end on
a fresh Ubuntu 26.04 installation, so expect rough edges.
