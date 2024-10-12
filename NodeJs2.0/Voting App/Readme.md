API Endpoints
Authentication
Sign Up
POST /signup: Sign up a user
Login
POST /login: Login a user
Candidates
Get Candidates
GET /candidates: Get the list of candidates
Add Candidate
POST /candidates: Add a new candidate (Admin only)
Update Candidate
PUT /candidates/:id: Update a candidate by ID (Admin only)
Delete Candidate
DELETE /candidates/:id: Delete a candidate by ID (Admin only)
Voting
Get Vote Count
GET /candidates/vote/count: Get the count of votes for each candidate
Vote for Candidate
POST /candidates/vote/:id: Vote for a candidate (User only)
User Profile
Get Profile
GET /users/profile: Get user profile information
Change Password
PUT /users/profile/password: Change user password