package be.prj.template.security.repository;

import be.prj.template.security.entity.Credential;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CredentialRepository extends JpaRepository<Credential, UUID> {
    Credential findByUsername(String username);

    boolean existsByUsername(String username);
}
