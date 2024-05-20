<!-- welcome.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Welcome to the City</title>
</head>
<body>
    <?php
    // Check if 'city' is set in POST data
    if (isset($_POST['city']) && !empty($_POST['city'])) {
        // Sanitize and retrieve the city
        $city = htmlspecialchars($_POST['city']);

        // Display the welcome message
        echo "<h1>Welcome to " . $city . "!</h1>";
    } else {
        // Redirect to the form if accessed directly or if 'city' is empty
        header("Location: form.php");
        exit();
    }
    ?>
</body>
</html>
``
