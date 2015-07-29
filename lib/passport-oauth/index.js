/**
 * Module dependencies.
 */
var OAuthStrategy = require('./strategies/oauth');
var InternalOAuthError = require('./errors/internaloautherror');

/**
 * Expose constructors.
 */
exports.OAuthStrategy = OAuthStrategy;
exports.InternalOAuthError = InternalOAuthError;
