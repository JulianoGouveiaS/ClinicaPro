package br.com.clinicapro.api.util;


import br.com.clinicapro.api.domain.Permissao;
import br.com.clinicapro.api.domain.Usuario;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;

import java.time.Instant;

public class JwtUtil {

    // Segundos equivalentes a 1 dia
    public static final int SEGUNDOS_EXPIRACAO_TOKEN = 60 * 60 * 24;

    public static String gerarToken(JwtEncoder jwtEncoder, Usuario usuario) {
        return jwtEncoder.encode(JwtEncoderParameters.from(getClaims(usuario))).getTokenValue();
    }

    public static JwtClaimsSet getClaims(Usuario usuario) {
        Instant now = Instant.now();
        return JwtClaimsSet.builder()
                .issuer("api")
                .subject(usuario.getLogin())
                .issuedAt(now)
                .expiresAt(now.plusSeconds(SEGUNDOS_EXPIRACAO_TOKEN))
                .claim("scope", usuario.getPermissoes().stream().map(Permissao::getDescricao).toList())
                .build();
    }

}
