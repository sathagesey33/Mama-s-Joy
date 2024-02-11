from flask import Blueprint, request, render_template
from models import db, ChildInfo
from app import app

child_info_bp = Blueprint('child_info', __name__)

# Create a new child info

@app.route('/child_info/create', methods=['POST'])
def create_child_info():
    if request.method == 'POST':
        child_name = request.form.get("babyName")
        date_of_birth = request.form.get('babyDOB')
        gender = request.form.get('babyGender')
        weight = request.form.get('babyWeight')
        height = request.form.get('babyHeight')
        user_id = request.form.get('user_id')
        print(child_name)

        new_child_info = ChildInfo(child_name=child_name, date_of_birth=date_of_birth, gender=gender,
                                      weight=weight, height=height, user_id=user_id)
        #db.session.add(new_child_info)
        #db.session.commit()
        return 'Child info created successfully!'
    return render_template("nav.html")
    