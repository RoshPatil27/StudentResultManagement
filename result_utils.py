def calculate_total(marks):
    total = 0
    for mark in marks:
        total += mark
    return total


def calculate_percentage(total, max_marks):
    return (total / max_marks) * 100


def assign_grade(percentage):
    if percentage >= 90:
        return "A+"
    elif percentage >= 75:
        return "A"
    elif percentage >= 60:
        return "B"
    elif percentage >= 50:
        return "C"
    else:
        return "Fail"
