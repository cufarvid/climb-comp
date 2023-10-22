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
  "Grade.sql"
  "Category.sql"
  "CompetitionType.sql"
  "Region.sql"
  "Country.sql"
  "Club.sql"
  "Season.sql"
  "Competition.sql"
  "User.sql"
  "Competitor.sql"
  "Registration.sql"
  "StartList.sql"
  "Route.sql"
  "Result.sql"
  "Comment.sql"
  "ScoreBoulder.sql"
  "ScoreLead.sql"
  "ScoreSpeed.sql"
  "Image.sql"
  "Post.sql"
)

echo "Populating tables"

for path in ${importPaths[@]}; do
  echo $path
  PGPASSWORD=$password psql -U $username -d $database -f $path
done

echo "Populating completed"
