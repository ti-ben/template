package be.prj.template.security.service;

import be.prj.template.security.entity.response.TokenResponse;

public interface TokenService {
    TokenResponse getRefreshToken(String refresh_token);
    TokenResponse getToken(String username, String password);
}
