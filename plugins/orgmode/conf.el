


;; use \n as a new line
(setq org-export-preserve-breaks t)

;; @https://emacs.stackexchange.com/questions/13820/inline-verbatim-and-code-with-quotes-in-org-mode
(setcar (nthcdr 2 org-emphasis-regexp-components) " \t\r\n")
(org-set-emph-re 'org-emphasis-regexp-components
                 org-emphasis-regexp-components)
