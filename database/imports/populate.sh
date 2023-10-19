#!/bin/bash
username="user"
password="password"
database="climbcompdb"

# Truncating tables
echo "Truncating tables"

PGPASSWORD=$password psql -U $username -d $database -f truncate.sql

echo "Truncating completed"

# Move to imports directory
cd imports

# Order is important!!!
importPaths=(
  "climbcompdb_public_Grade.sql"
  "climbcompdb_public_Category.sql"
  "climbcompdb_public_CompetitionType.sql"
  "climbcompdb_public_Region.sql"
  "climbcompdb_public_Country.sql"
  "climbcompdb_public_Location.sql"
  "climbcompdb_public_Club.sql"
  "climbcompdb_public_Season.sql"
  "climbcompdb_public_Competition.sql"
  "climbcompdb_public_User.sql"
  "climbcompdb_public_Competitor.sql"
  "climbcompdb_public_Registration.sql"
  "climbcompdb_public_StartList.sql"
  "climbcompdb_public_Route.sql"
  "climbcompdb_public_Result.sql"
  "climbcompdb_public_Comment.sql"
  "climbcompdb_public_ScoreBoulder.sql"
  "climbcompdb_public_ScoreLead.sql"
  "climbcompdb_public_ScoreSpeed.sql"
)

echo "Populating tables"

for path in ${importPaths[@]}; do
  echo $path
  PGPASSWORD=$password psql -U $username -d $database -f $path
done

echo "Populating completed"
