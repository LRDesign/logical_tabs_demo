# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_logical-tabs-demo_session',
  :secret      => 'dbaaeb2edd5d47c97e56fc01fb17faaed53a5a4bf8b03d60145bfb9d3d02bff393c75112f5bef135a1003fcdbd9fcbc319cbec9e9f6b2d4a448da0ca8cea01d1'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
