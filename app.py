from flask import Flask, render_template, request, redirect, url_for,  send_from_directory, session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User, ChildInfo
app = Flask(__name__)
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'  # Use SQLite for simplicity
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://hp840:mysql@localhost/baby_growth'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your_secret_key'

db.init_app(app)

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

@app.route('/static/images/<filename>')
def get_image(filename):
    return send_from_directory('static/images', filename)

@app.route('/child_info/create', methods=['POST'])
def create_child_info():
    if request.method == 'POST':
        child_name = request.form.get("babyName")
        date_of_birth = request.form.get('babyDOB')
        gender = request.form.get('babyGender')
        weight = request.form.get('babyWeight')
        height = request.form.get('babyHeight')
        user_id = session['user_id']
        print(child_name)

        new_child_info = ChildInfo(child_name=child_name, date_of_birth=date_of_birth, gender=gender,
                                      weight=weight, height=height, user_id=user_id)
        db.session.add(new_child_info)
        
        db.session.commit()
        return 'Child info created successfully!'
    return render_template("nav.html")


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

        # Check if the password is correct
        if user and user.password == password:
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
        #hashed_password = generate_password_hash(password, method='sha256')
            
            new_user = User(username=username, email=email, password=password)
            db.session.add(new_user)
            db.session.commit()
            return redirect(url_for('dashboard'))
            
    return redirect(url_for('index'))
  #create_child_info()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)