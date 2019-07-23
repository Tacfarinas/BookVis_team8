import json
import requests
import smtplib
from . import app
from flask import request
from urllib.request import quote, urlopen

def get_bookInfo(source) -> list:
    from . import DEFAULTS, SOURCES

    # Determine fallback values.
    if source is None or source not in SOURCES.keys():
        source = DEFAULTS["source"]
    else:
        source = source.lower()

    # Fetch data from the API.
    r = requests.get(f"https://newsapi.org/v1/articles?source={SOURCES[source]}&sortBy=top&apiKey={app.config['NEWS_API_KEY']}")

    return r.json().get("articles")