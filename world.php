<?php
mysql_connect(
"localhost",
"root@localhost"
);
mysqli_select_db("world");
$lookup = $_REQUEST['lookup'];
# execute a SQL query on the database
$results = mysqli_query("SELECT * FROM countries WHERE name LIKE '%$lookup%';");
echo $results;
# loop through each country
while ($row = mysqli_fetch_array($results)) {
  ?>
  <li> <?php echo $row["name"]; ?>, ruled by <?php echo $row["head_of_state"]; ?> </li>
  <?php
}
?>