# Description: This file contains the database models for the application.
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from mamajoy import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
   # preferences = db.Column(db.String(255))

    # One-to-Many relationship with Mother Record Table
   # mother_record = db.relationship('MotherRecord', backref='user', lazy=True)

    # One-to-Many relationship with Child Info Table
    #child_info = db.relationship('ChildInfo', backref='user', lazy=True)
   #lass MotherRecord(db.Model):
    
   # id = db.Column(db.Integer, primary_key=True)
    #notes = db.Column(db.String(255))
    #user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    # Many-to-One relationship with User Table
    #user = db.relationship('User', backref=db.backref('mother_record', lazy=True))

    # One-to-Many relationship with Child Info Table
    #child_info = db.relationship('ChildInfo', backref='mother_record', lazy=True)

class ChildInfo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    child_name = db.Column(db.String(50), nullable=False)
    date_of_birth = db.Column(db.Date)
    gender = db.Column(db.String(10))
    weight = db.Column(db.Float)
    height = db.Column(db.Float)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
   # mother_id = db.Column(db.Integer, db.ForeignKey('mother_record.id'), nullable=False)

    # Many-to-One relationship with User Table
   # user = db.relationship('User', backref=db.backref('child_info', lazy=True))

    # Many-to-One relationship with Mother Record Table
    #mother_record = db.relationship('MotherRecord', backref=db.backref('child_info', lazy=True))

    # One-to-Many relationship with Journal Entries Table
    #journal_entries = db.relationship('JournalEntry', backref='child_info', lazy=True)

#class JournalEntry(db.Model):
   # id = db.Column(db.Integer, primary_key=True)
    #entry_date = db.Column(db.Date)
    #entry_text = db.Column(db.Text)
    #child_id = db.Column(db.Integer, db.ForeignKey('child_info.id'), nullable=False)

    # Many-to-One relationship with Child Info Table
    #child_info = db.relationship('ChildInfo', backref=db.backref('journal_entries', lazy=True))

#class VaccinationSchedule(db.Model):
   # id = db.Column(db.Integer, primary_key=True)
    #vaccine_name = db.Column(db.String(50), nullable=False)
    #recommended_age = db.Column(db.String(20))
    #reminder_days_before = db.Column(db.Integer)
    #child_info_id = db.Column(db.Integer, db.ForeignKey('child_info.id'), nullable=False)

    # Many-to-One relationship with Child Info Table
   # child_info = db.relationship('ChildInfo', backref=db.backref('vaccination_schedule', lazy=True))

