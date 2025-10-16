FROM art.platformeco.cloud/core:3.48.0

ARG ENVIRONMENT=production

WORKDIR /app/channel
COPY --chown=5000:5000 . .
RUN npm i --only=prod

ENV NODE_ENV=${ENVIRONMENT}

WORKDIR /app
