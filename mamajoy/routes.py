from flask import render_template, request, redirect, url_for,  send_from_directory, session
#from werkzeug.security import generate_password_hash, check_password_hash
from mamajoy.models import db, User, ChildInfo, Note
from datetime import datetime
from mamajoy import app, bcrypt

#class User(db.Model):
   # id = db.Column(db.Integer, primary_key=True)
    #username = db.Column(db.String(50), nullable=False)
    #email = db.Column(db.String(120), unique=True, nullable=False)
    #password = db.Column(db.String(120), nullable=False)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/templates')
def dashboard():
    return render_template('nav.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/static/images/<filename>')
def get_image(filename):
    return send_from_directory('static/images', filename)

@app.route('/create_childinfo', methods=['POST'])
def create_child_info():
    if request.method == 'POST':
        child_name = request.form.get("babyName")
        date_of_birth_str = request.form.get('babyDOB')
        date_of_birth = datetime.strptime(date_of_birth_str, '%Y-%m-%d').date()
        gender = request.form.get('babyGender')
        weight = request.form.get('babyWeight')
        height = request.form.get('babyHeight')
        babyBloodType = request.form.get('babyBloodType')
        babyMedicalHistory = request.form.get('babyMedicalHistory')
        Allergies = request.form.get('babyAllergies')
        Pediatrician_Name = request.form.get('babyPediatricianName')
        Pediatrician_Phone = request.form.get('babyPediatricianPhone')
        Hospital_Birth = request.form.get('babyHospitalBirth')
        Delivery_Type = request.form.get('babyDeliveryType')
        Apgar_Score = request.form.get('babyApgarScore')
        Birth_Complications = request.form.get('babyBirthComplications')
        user_id = session['user_id']

        new_child_info = ChildInfo(child_name=child_name, date_of_birth=date_of_birth, gender=gender,
                                      weight=weight, height=height, user_id=user_id, babyBloodType=babyBloodType,
                                      babyMedicalHistory=babyMedicalHistory, babyAllergies=Allergies, babyPediatricianName=Pediatrician_Name,
                                      babyPediatricianPhone=Pediatrician_Phone, babyHospitalBirth=Hospital_Birth, babyDeliveryType=Delivery_Type,
                                      babyApgarScore=Apgar_Score, babyBirthComplications=Birth_Complications)
        db.session.add(new_child_info)
        
        db.session.commit()
        return 'Child info created successfully!'
    else:
        return 'an error occurred'
    return render_template("nav.html")


@app.route('/save_note', methods=['POST'])
def save_note():
    if request.method == 'POST':
        note = request.form.get('note')
        user_id = session['user_id']
        print(note)

        new_note = ChildInfo(notes=note, user_id=user_id)
        db.session.add(new_note)
        db.session.commit()
        return 'Note saved successfully!'
    return render_template("keepnotes.html")


@app.route('/static/script.js')
def serve_js():
    return send_from_directory('static', 'script.js')

@app.route('/static/form.js')
def serve_form_js():
        return send_from_directory('static', 'form.js')

@app.route('/static/nav.js')
def serve_nav_js():
    return send_from_directory('static', 'nav.js')

@app.route('/static/style.css')
def serve_css():
    return send_from_directory('static', 'style.css')

@app.route('/static/nav.css')
def serve_nav_css():
    return send_from_directory('static', 'nav.css')

@app.route('/static/form.css')
def serve_form_css():
    return send_from_directory('static', 'form.css')

@app.route('/templates/calender')
def calendar_redirect():

    # Redirect to the desired page based on the navigation HTML
    return render_template('calender.html')

@app.route('/templates/keepnotes')
def keepnotes_redirect():
    # Redirect to the desired page based on the navigation HTML
    return render_template('keepnotes.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Get the username and password from the form
        #username = request.form['username']
        #password = request.form['password']
        email = request.form.get('email')
        password = request.form.get('password')

        # Check if the user exists in the database
        user = User.query.filter_by(email=email).first()
        valid_password = bcrypt.check_password_hash(user.password, password)

        # Check if the password is correct
        if user and valid_password == True:
            session['user_id'] = user.id
            

            return redirect(url_for('dashboard'))
            #return  render_template('nav.html')
        else:
            return 'Invalid email or password'

    return render_template('index.html')


@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')

        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')
        if password != confirm_password:
            return 'Passwords do not match'
        else:

        # Hash the password before storing it in the database
            hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        
            
            new_user = User(username=username, email=email, password=hashed_password)
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for('dashboard'))
            
    return redirect(url_for('index'))
  #create_child_info()