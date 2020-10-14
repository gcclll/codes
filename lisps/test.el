(message "hello world")

(defun test (name)
       "test function"
       (message "Hello %s" name))
test

(test "world")
"Hello world"



(setq var-name "Emacs")
"Emacs"

(defvar var-name "New Emacs"
  "Var name document")
var-name

(message "my name is %s" var-name)
"my name is Emacs"

(defun circle-area (radix)
  (let ((pi 3.1415926) area)
  (setq area (* pi radix radix))
  (message "radix: %.2f, area: %.2f" radix area)))
circle-area

(circle-area 3)
"radix: 3.00, area: 28.27"

(defun circle-area-2 (radix)
  (let* ((pi 3.14) (area (* pi radix radix)))
    (message "radix: %.2f, area: %.2f" radix area)))
circle-area-2
(circle-area-2 3)
"radix: 3.00, area: 28.26"

(funcall (lambda (radix)
           (let* ((pi 3.14) (area (* pi pi)))
             (message "radix: %.2f, area: %.2f" radix area))) 3)
