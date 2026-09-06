# Create: Horizons

A NeoForge 1.21.1 modpack built around Create and skyblock-style progression. Mod metadata is managed with [packwiz](https://packwiz.infra.link/) so the pack can be version-controlled and distributed without committing mod JARs.

**Repository:** https://github.com/Hakuni-studio/create-horizons

## Requirements

- Minecraft **1.21.1**
- NeoForge **21.1.249**
- [packwiz](https://packwiz.infra.link/installation/) CLI (for maintaining the pack)
- Java 21

## Repository layout

| Path | Purpose |
|------|---------|
| `pack.toml` | Modpack metadata (name, Minecraft/NeoForge versions) |
| `index.toml` | File index used by packwiz-installer |
| `minecraft/mods/*.pw.toml` | Mod download metadata (CurseForge, Modrinth, GitHub) |
| `minecraft/config/` | Default mod configuration |
| `minecraft/kubejs/` | KubeJS scripts and datapack-style recipes |
| `minecraft/shaderpacks/` | Bundled shader packs |
| `mmc-pack.json` | Prism Launcher / MultiMC instance metadata |
| `instance.cfg` | Prism Launcher instance settings |

Dev mod **sources** live in separate repositories under [Hakuni-studio](https://github.com/Hakuni-studio) and are not part of this repo.

## Setup for players (Prism Launcher)

### Option A: Clone and sync locally

```bash
git clone https://github.com/Hakuni-studio/create-horizons.git
cd create-horizons
packwiz update --all
packwiz refresh --build
```

Point a Prism Launcher instance at this folder, or copy `mmc-pack.json` and `instance.cfg` into a new 1.21.1 NeoForge instance.

### Option B: packwiz-installer (auto-updating instance)

1. Create a NeoForge 1.21.1 instance in Prism Launcher.
2. Download [packwiz-installer-bootstrap](https://github.com/packwiz/packwiz-installer-bootstrap/releases) into the instance `minecraft/` folder.
3. In **Edit Instance → Settings → Custom Commands**, set **Pre-launch command** to:

   ```
   "$INST_JAVA" -jar packwiz-installer-bootstrap.jar https://raw.githubusercontent.com/Hakuni-studio/create-horizons/main/pack.toml
   ```

4. Launch the instance once to download mods and overrides.

## Maintaining the pack

Install or update a mod from Modrinth:

```bash
packwiz modrinth add <slug>
```

Install or update a mod from CurseForge:

```bash
packwiz curseforge add <slug>
```

Update all external mods:

```bash
packwiz update --all
packwiz refresh --build
```

After editing configs, KubeJS scripts, or adding files manually:

```bash
packwiz refresh --build
```

## Custom mods

This pack includes two custom mods published via GitHub Releases from [Hakuni-studio](https://github.com/Hakuni-studio):

- **Create: Horizons** (`createsky`) — [create-sky-mod](https://github.com/Hakuni-studio/create-sky-mod)
- **Horizon Animation** (`horizonanimation`) — [horizons-animations](https://github.com/Hakuni-studio/horizons-animations)

Once those repos have GitHub Releases, you can manage them with:

```bash
packwiz github add Hakuni-studio/create-sky-mod
packwiz github add Hakuni-studio/horizons-animations
```

## Publishing

- **GitHub**: push to [create-horizons](https://github.com/Hakuni-studio/create-horizons); host `pack.toml` on `main` for packwiz-installer.
- **Modrinth / CurseForge**: `packwiz modrinth export` or `packwiz curseforge export` after the pack is stable.

## packwiz install

```bash
go install github.com/packwiz/packwiz@latest
```

Ensure `$HOME/go/bin` is on your `PATH`.
