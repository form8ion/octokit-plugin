Feature: Scaffolder

  Scenario: Scaffold
    When the project is scaffolded
    Then the compose functionality is exposed through the public interface
    And the plugin is exposed through the public interface
    And the example demonstrates use as a plugin and through compose
