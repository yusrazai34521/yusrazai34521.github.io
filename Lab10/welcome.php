<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome</title>
</head>
<body>

<?php
if(isset($_POST['city'])) {
    $city = $_POST['city'];
    echo "<h2>Welcome to $city!</h2>";
}
?>

</body>
</html>
