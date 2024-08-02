const db = require('../config/db');

const Application = {
  create: (application, callback) => {
    const query = 'INSERT INTO Applications (job_id, job_seeker_id, cover_letter, resume) VALUES (?, ?, ?, ?)';
    console.log('Executing query:', query, application);
    db.query(query, [application.job_id, application.job_seeker_id, application.cover_letter, application.resume], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        callback(err, null);
        return;
      }
      console.log('Query executed successfully:', result);
      callback(null, result);
    });
  },

  findAll: (callback) => {
    const query = 'SELECT * FROM Applications';
    console.log('Executing query:', query);
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        callback(err, null);
        return;
      }
      console.log('Query executed successfully:', results);
      callback(null, results);
    });
  },

  findById: (id, callback) => {
    const query = 'SELECT * FROM Applications WHERE application_id = ?';
    console.log('Executing query:', query, id);
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        callback(err, null);
        return;
      }
      console.log('Query executed successfully:', result);
      callback(null, result);
    });
  },

  findByJobId: (job_id, callback) => {
    const query = 'SELECT * FROM Applications WHERE job_id = ?';
    console.log('Executing query:', query, job_id);
    db.query(query, [job_id], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        callback(err, null);
        return;
      }
      console.log('Query executed successfully:', results);
      callback(null, results);
    });
  },

  findByJobSeekerId: (job_seeker_id, callback) => {
    const query = 'SELECT * FROM Applications WHERE job_seeker_id = ?';
    console.log('Executing query:', query, job_seeker_id);
    db.query(query, [job_seeker_id], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        callback(err, null);
        return;
      }
      console.log('Query executed successfully:', results);
      callback(null, results);
    });
  },

  update: (id, application, callback) => {
    const query = 'UPDATE Applications SET cover_letter = ?, resume = ? WHERE application_id = ?';
    console.log('Executing query:', query, application, id);
    db.query(query, [application.cover_letter, application.resume, id], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        callback(err, null);
        return;
      }
      console.log('Query executed successfully:', result);
      callback(null, result);
    });
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM Applications WHERE application_id = ?';
    console.log('Executing query:', query, id);
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        callback(err, null);
        return;
      }
      console.log('Query executed successfully:', result);
      callback(null, result);
    });
  }
};

module.exports = Application;
