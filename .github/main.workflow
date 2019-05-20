workflow "Build" {
  on = "push"
  resolves = ["npm run build"]
}

action "npm ci" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm ci"
}

action "npm run build" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm run build"
  needs = ["npm ci"]
}
