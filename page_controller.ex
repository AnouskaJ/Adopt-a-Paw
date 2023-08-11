defmodule DemoWeb.PageController do
  use DemoWeb, :controller

  def index(conn, _params) do
    # The home page is often custom made,
    # so skip the default app layout.
    render(conn, "index.html", layout: {DemoWeb.LayoutView, :app})
  end

  def homepage(conn, _params) do
    render(conn, "homepage.html", layout: {DemoWeb.LayoutView, :app})
  end

  def login(conn, _params) do
    render(conn, "login.html", layout: {DemoWeb.LayoutView, :app})
  end
end
