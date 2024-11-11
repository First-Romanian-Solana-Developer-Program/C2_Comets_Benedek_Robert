fn main() {
    let number = "T-H-R-E-E"; // Don't change this line
    println!("Spell a number: {}", number);

    // TODO: Fix the compiler error by changing the line below without renaming the variable.
    let number = match number {
        "O-N-E" => 1,
        "T-W-O" => 2,
        "T-H-R-E-E" => 3,
        "F-O-U-R" => 4,
        "F-I-V-E" => 5,
        "S-I-X" => 6,
        "S-E-V-E-N" => 7,
        "E-I-G-H-T" => 8,
        "N-I-N-E" => 9,
        _ => {
            println!("unknown");
            return;
        }
    };
     println!("Number plus two is: {}", number + 2);
} 