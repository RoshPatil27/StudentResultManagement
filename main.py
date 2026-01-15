from result_utils import calculate_total, calculate_percentage, assign_grade


def student_result_system():
    name = input("Enter student name: ")
    subjects = int(input("Enter number of subjects: "))

    marks = []

    for i in range(subjects):
        mark = int(input(f"Enter marks for subject {i + 1}: "))
        marks.append(mark)

    total = calculate_total(marks)
    max_marks = subjects * 100
    percentage = calculate_percentage(total, max_marks)
    grade = assign_grade(percentage)

    print("\n----- STUDENT RESULT -----")
    print("Name       :", name)
    print("Total      :", total)
    print("Percentage :", round(percentage, 2), "%")
    print("Grade      :", grade)


student_result_system()
