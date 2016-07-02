# gestaltClp
server component for the See-er CraigsList playground

#1: Start PostgresQL (Postgres.app)
#2: npm install --global gestalt-cli
#3: npm install 
#4: createdb gestaltClp
#4.5: open schema.graphql and remove all the fields that contain @relationship (save for later)
#5: gestalt migrate
#5.5: open schema.graphql and replace all the fields that contain @relationship (from 4.5)
#6: npm start 
