package de.gca1.onlineBoutique;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

//Spring boot security configuration class.
@Configuration
@EnableWebSecurity      // Enables security for our application.
class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private Environment env;
    // Securing the urls and allowing role-based access to these urls.
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.httpBasic().and().authorizeRequests()
                .antMatchers("/security/guest").hasRole("USER")
                .antMatchers("/security/admin").hasRole("ADMIN")
                .antMatchers(HttpMethod.OPTIONS, "**").permitAll()
                .anyRequest().authenticated()
                .and().csrf().disable();
    }

    // In-memory authentication to authenticate the user i.e. the user credentials are stored in the memory.
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        auth.inMemoryAuthentication().withUser(env.getProperty("frontend.user")).password("{noop}" + env.getProperty("frontend.password")).roles("USER");
        auth.inMemoryAuthentication().withUser(env.getProperty("checkout.user")).password("{noop}" + env.getProperty("checkout.password")).roles("USER");
     }
}