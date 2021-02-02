# flags
MAKEFLAGS += --always-make
MAKEFLAGS += --silent
MAKEFLAGS += --ignore-errors
MAKEFLAGS += --no-print-directory

# constants
export PROJECT = $(shell basename `pwd`)
export UID = $(shell id -u)
export GID = $(shell id -g)

.PHONY: commit
ifeq (commit,$(firstword $(MAKECMDGOALS)))
  RUN_ARGS := $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
  $(eval $(RUN_ARGS):;@:)
endif
commit: ## commit by git-cz : ## make commit
	./node_modules/.bin/git-cz
