# Deploy MellowTab

In your DigitalOcean account, open App Platform and create an app from `tashi128/MellowTab`, branch `main`.

Use `.do/app.yaml` for the configuration, or select Static Site with source directory `/`, output directory `_static`, and build command:

```sh
mkdir -p _static && cp index.html site.css site.js _static/ && cp -R assets _static/assets
```

The build copies only public website files into `_static`. No environment variables or paid compute components are required. Review the account-specific price before creating the app.

Once the app is deployed, open Networking → Domains → Add domain. Enter `mellowtab.zartashia.com` and choose “You manage your domain”.

In GoDaddy DNS for zartashia.com, add a CNAME with name `mellowtab` and value equal to the exact `ondigitalocean.app` hostname displayed by DigitalOcean. Keep other DNS records and nameservers unchanged. Finish the domain setup and wait for HTTPS verification.

Official guide: https://docs.digitalocean.com/products/app-platform/how-to/manage-domains/
