Code:
<?php
class Student {
    public $RollNo;
    public $Name;
    public $Branch;
    public $Year;

    public function __construct($RollNo, $Name, $Branch, $Year) {
        $this->RollNo = $RollNo;
        $this->Name = $Name;
        $this->Branch = $Branch;
        $this->Year = $Year;
    }

    public function printDetails() {
        echo "Roll No: " . $this->RollNo . "<br>";
        echo "Name: " . $this->Name . "<br>";
        echo "Branch: " . $this->Branch . "<br>";
        echo "Year: " . $this->Year . "<br><br>";
    }
}

// Creating instances of the Student class
$student1 = new Student(355790, "Fiza", "Computer Science", "Fourth");
$student2 = new Student(345622, "Aroob", "Civil Engineering", "First");
$student3 = new Student(56342, "Ali", "Chemical Engineering", "Second");

// Printing details of each student
$student1->printDetails();
$student2->printDetails();
$student3->printDetails();
?>
