import Config

config :we_proj, WeProjWeb.Endpoint, cache_static_manifest: "priv/static/cache_manifest.json"

config :swoosh, api_client: Swoosh.ApiClient.Finch, finch_name: WeProj.Finch

config :swoosh, local: false

config :logger, level: :info

