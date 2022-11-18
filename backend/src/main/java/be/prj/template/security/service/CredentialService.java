package be.prj.template.security.service;

import be.prj.template.common.entity.ApiResponse;
import be.prj.template.security.entity.Credential;
import be.prj.template.security.entity.payload.SignupRequest;

public interface CredentialService {

    Credential saveCredential(Credential credential);

    Credential findCredentialByUsername(String username);

    ApiResponse signup(SignupRequest request);

}