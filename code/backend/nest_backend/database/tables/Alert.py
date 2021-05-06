"""
This module defines the Alert database class.
"""

from ..base import Base


class Alert(Base.Model):
    __tablename__ = "alert"
    id = Base.Column(Base.Integer, primary_key=True)
    name = Base.Column(Base.String, nullable=False)
    limit = Base.Column(Base.Integer, nullable=False)
    window_size = Base.Column(Base.Integer, nullable=False)
    # Foreign Keys
    repository_id = Base.Column(Base.Integer, Base.ForeignKey("repository.id", ondelete="CASCADE"), nullable=False)
    # Relationships
    repository = Base.relationship("Repository", back_populates="alerts")
    notifications = Base.relationship("Notification", back_populates="alert", cascade="all, delete")
    operations = Base.relationship("BoolOperation", back_populates="alert", cascade="all, delete")